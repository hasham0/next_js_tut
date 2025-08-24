import Card from "@/components/card";

export default async function UserAnalytics() {
  await new Promise((resolve) =>
    setTimeout(() => {
      resolve("delay");
    }, 1000)
  );
  return <Card>User Analytics</Card>;
}
