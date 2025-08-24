import Link from "next/link";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ id: string; slug: string }>;
};

export default async function DynamicBlogPage({ params }: Props) {
  const { id: productID, slug: reviewID } = await params;
  if (parseInt(reviewID) > 1000) {
    notFound();
  }

  return (
    <div>
      <p>Product ID: {productID}</p>
      <p>Review ID: {reviewID}</p>

      <div className="border-2 border-gray-400 bg-gray-400 flex justify-center items-center min-w-full py-2 px-5 my-10">
        <Link href={`/products/${productID}`}>Back to Reviews</Link>
      </div>
    </div>
  );
}
