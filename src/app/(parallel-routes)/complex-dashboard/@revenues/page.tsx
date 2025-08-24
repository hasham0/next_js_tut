import Card from "@/components/card";

const getRandomInt = (count: number) => {
  return Math.floor(Math.random() * count);
};
export default function RevenueMetrics() {
  const random = getRandomInt(2);

  if (random === 1) {
    throw new Error("Error loading review!");
  }
  return <Card>Revenue Metrics Page</Card>;
}
