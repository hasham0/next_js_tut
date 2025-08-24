"use client";

import { startTransition } from "react";
import { useRouter } from "next/navigation";

import Card from "@/components/card";

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  const router = useRouter();
  const reload = () => {
    startTransition(() => {
      router.refresh();
      reset();
    });
  };
  return (
    <Card>
      <div className="flex flex-col">
        <p>Error in Review: {error.message}</p>
        <button
          onClick={() => reload()}
          className="bg-blue-500 m-5 text-white py-2 px-4 rounded"
        >
          Try Again
        </button>
      </div>
    </Card>
  );
}
