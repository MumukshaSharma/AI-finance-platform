"use server";

import { db } from "@/lib/prisma";

export async function saveCategorizationFeedback({
  description,
  predictedCategory,
  actualCategory,
  confidence,
}) {
  try {
    return await db.categorizationFeedback.create({
      data: {
        description,
        predictedCategory,
        actualCategory,
        confidence,
      },
    });
  } catch (error) {
    console.error(error);
  }
}