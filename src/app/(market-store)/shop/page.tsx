import React from "react";
import type { Metadata } from "next";
import Link from "next/link";

type Props = {};

export const metadata: Metadata = {
  title: "Shop",
};
export default function ShoppingPage({}: Props) {
  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      <Link href="/shop/1">shop 1</Link>
      <Link href="/shop/2">shop 2</Link>
      <Link href="/shop/3">shop 3</Link>
    </div>
  );
}
