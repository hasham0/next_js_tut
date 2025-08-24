import Link from "next/link";

import Card from "@/components/card";

export default function ArchivedNotifications() {
  return (
    <Card>
      <div className="flex flex-col gap-4">
        <h3>Archived Notifications</h3>
        <div>
          <Link
            href="/complex-dashboard"
            className="text-blue-500 hover:underline"
          >
            Back to Notifications
          </Link>
        </div>
      </div>
    </Card>
  );
}
