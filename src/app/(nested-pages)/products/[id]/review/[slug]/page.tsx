import Link from 'next/link';

type Props = {
  params: Promise<{ id: string; slug: string }>;
};

export default async function DynamicBlogPage({ params }: Props) {
  const { id: productID, slug: reviewID } = await params;
  return (
    <div>
      <p>Product ID: {productID}</p>
      <p>Review ID: {reviewID}</p>

      <div className="border-2 border-gray-400 bg-gray-400 flex justify-center items-center w-full py-2 my-10">
        <Link href={`/products/${productID}`}>Back to Reviews</Link>
      </div>
    </div>
  );
}
