import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Complex Dashboard",
    template: "%s | Complex Dashboard",
  },
};

export default function ComplexDashboardPage() {
  return <div>Complex Dashboard Page</div>;
}
