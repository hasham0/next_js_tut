import Link from "next/link";

import Card from "@/components/card";

export default function Notifications() {
  return (
    <Card>
      <div className="flex flex-col gap-4">
        <h3>Notifications</h3>
        <div>
          <Link
            href="/complex-dashboard/archived"
            className="text-blue-500 hover:underline"
          >
            Archived
          </Link>
        </div>
      </div>
    </Card>
  );
}
