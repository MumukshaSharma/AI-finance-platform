import { getSpendingInsights } from "@/actions/dashboard-insights";

export async function GET() {
  const data = await getSpendingInsights();

  return Response.json(data);
}