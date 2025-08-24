"use client";

import { useRouter } from "next/navigation";

type Props = {};

export default function OrderPage({}: Props) {
  const router = useRouter();
  return (
    <div>
      <h1>Order Products</h1>
      <button
        onClick={() => router.push("/")}
        className="bg-blue-500 rounded-xl p-2 my-10"
      >
        Place Order
      </button>
    </div>
  );
}
