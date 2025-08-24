import React from "react";
import Image from "next/image";

import Card from "@/components/card";

type Props = {
  params: Promise<{ image: string[] }>;
};

export default async function ImagePage({ params }: Props) {
  const { image } = await params;

  return (
    <Card>
      <div className="flex flex-col gap-4">
        <Image
          src="https://placehold.co/1000x1000"
          alt="image1"
          width={500}
          height={300}
          priority
        />
        <h1>
          Image Number:{" "}
          {image.map((img) => img[0].toUpperCase() + img.slice(1)).join(" ")}
        </h1>
      </div>
    </Card>
  );
}
