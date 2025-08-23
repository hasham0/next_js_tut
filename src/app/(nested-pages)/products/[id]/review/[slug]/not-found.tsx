"use client";

import { usePathname } from "next/navigation";

export default function NotFound() {
  const pathname = usePathname();
  const productID = pathname.split("/")[2];
  const reviewID = pathname.split("/")[4];

  return (
    <div>
      <p>
        Review {reviewID} not found for product {productID}
      </p>
    </div>
  );
}
