"use server";

import { auth } from "@clerk/nextjs/server";
import { db } from "@/lib/prisma";

export async function getSpendingInsights() {
    const { userId } = await auth();

    if (!userId) {
        throw new Error("Unauthorized");
    }

    const user = await db.user.findUnique({
        where: {
            clerkUserId: userId,
        },
    });

    if (!user) {
        throw new Error("User not found");
    }

    const now = new Date();

    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(now.getDate() - 30);

    const sixtyDaysAgo = new Date();
    sixtyDaysAgo.setDate(now.getDate() - 60);

    const groupedExpenses = await db.transaction.groupBy({
        by: ["category"],

        where: {
            userId: user.id,
            type: "EXPENSE",
            date: {
                gte: thirtyDaysAgo,
            },
        },

        _sum: {
            amount: true,
        },
    });

    const previousExpenses = await db.transaction.groupBy({
        by: ["category"],

        where: {
            userId: user.id,
            type: "EXPENSE",

            date: {
                gte: sixtyDaysAgo,
                lt: thirtyDaysAgo,
            },
        },

        _sum: {
            amount: true,
        },
    });
    const totalSpent = groupedExpenses.reduce(
        (sum, item) => sum + Number(item._sum.amount || 0),
        0
    );
    const previousMap = {};

    previousExpenses.forEach((item) => {
        previousMap[item.category] = Number(
            item._sum.amount || 0
        );
    });

    const breakdown = groupedExpenses
        .map((item) => {
            const amount = Number(item._sum.amount || 0);

            const previousAmount =
                previousMap[item.category] || 0;

            let changeVsLastMonth = null;

            if (previousAmount > 0) {
                changeVsLastMonth = Number(
                    (
                        ((amount - previousAmount) /
                            previousAmount) *
                        100
                    ).toFixed(1)
                );
            }

            return {
                category: item.category,
                amount,

                percentage:
                    totalSpent > 0
                        ? Number(
                            (
                                (amount / totalSpent) *
                                100
                            ).toFixed(1)
                        )
                        : 0,

                changeVsLastMonth,
            };
        })
        .sort((a, b) => b.amount - a.amount);

    const insights = [];

    // Largest category
    if (breakdown.length > 0) {
        const largest = breakdown[0];

        insights.push(
            `${largest.category} is your largest spending category at ${largest.percentage}%`
        );
    }

    // Increased spending
    breakdown.forEach((item) => {
        if (
            item.changeVsLastMonth !== null &&
            item.changeVsLastMonth > 20
        ) {
            insights.push(
                `${item.category} spending increased ${item.changeVsLastMonth}% compared to last month`
            );
        }
    });

    // Decreased spending
    breakdown.forEach((item) => {
        if (
            item.changeVsLastMonth !== null &&
            item.changeVsLastMonth < -20
        ) {
            insights.push(
                `${item.category} spending decreased ${Math.abs(
                    item.changeVsLastMonth
                )}% compared to last month`
            );
        }
    });

    // New spending category
    const hasPreviousData = previousExpenses.length > 0;

if (hasPreviousData) {
  breakdown.forEach((item) => {
    if (item.changeVsLastMonth === null) {
      insights.push(
        `${item.category} is a new spending category this period`
      );
    }
  });
}

    return {
        totalSpent,
        breakdown,
        insights,
    };
}