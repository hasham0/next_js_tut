import React from "react";
import Link from "next/link";

type Props = {};

export default function Gallery({}: Props) {
  return (
    <div className="flex flex-col gap-4">
      {Array.from({ length: 5 }, (_, i) => (
        <Link key={i} href={`/gallery/image/${i + 1}`} replace>
          Image {i + 1}
        </Link>
      ))}
    </div>
  );
}
