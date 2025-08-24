import React from "react";
import Image from "next/image";

import Card from "@/components/card";

type Props = {
  params: Promise<{ image: string }>;
};

export default async function InterceptedImage({ params }: Props) {
  const { image } = await params;
  const extractName = image[0];
  const imageNumber = extractName.charAt(extractName.length - 1);
  const makeName =
    extractName.charAt(0).toUpperCase() +
    extractName.slice(1, extractName.length - 1);

  return (
    <Card>
      <div className="flex flex-col gap-4">
        <Image
          src="https://placehold.co/600x400"
          alt="image1"
          width={500}
          height={300}
          priority
        />
        <h1>
          Image Number: {makeName} {imageNumber}
        </h1>
      </div>
    </Card>
  );
}
