import { getSpendingInsights } from "@/actions/dashboard-insights";

export async function SpendingInsights() {
  const data = await getSpendingInsights();

  return (
    <div className="rounded-xl border p-6 space-y-6">
      <div>
        <h2 className="text-xl font-semibold">
          Spending Breakdown
        </h2>

        <p className="text-sm text-muted-foreground">
          Last 30 days
        </p>
      </div>

      <div className="space-y-4">
        {data.breakdown.map((item) => (
          <div key={item.category}>
            <div className="flex justify-between text-sm mb-1">
              <span className="capitalize">
                {item.category}
              </span>

              <span>
                ₹{item.amount} ({item.percentage}%)
              </span>
            </div>

            <div className="h-2 bg-muted rounded-full overflow-hidden">
              <div
                className="h-full bg-primary"
                style={{
                  width: `${item.percentage}%`,
                }}
              />
            </div>
          </div>
        ))}
      </div>

      <div>
        <h3 className="font-medium mb-2">
          Insights
        </h3>

        <ul className="list-disc pl-5 space-y-1 text-sm">
          {data.insights.map((insight, index) => (
            <li key={index}>{insight}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}