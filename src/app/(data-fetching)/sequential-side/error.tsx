"use client";

import { useEffect } from "react";

export default function ErrorPage({ error }: { error: Error }) {
  useEffect(() => {
    console.log("error =>", error);
  }, [error]);
  return <div>Error: {error.message}</div>;
}
