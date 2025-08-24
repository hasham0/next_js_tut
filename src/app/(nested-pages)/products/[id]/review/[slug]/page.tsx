import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

//import { redirect } from "next/navigation";

type Props = {
  params: Promise<{ id: string; slug: string }>;
};
export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const { id, slug } = await params;

  return {
    title: `Product ${id} - Review ${slug}`,
  };
};

const getRandomInt = (count: number) => {
  return Math.floor(Math.random() * count);
};

export default async function DynamicBlogPage({ params }: Props) {
  const { id: productID, slug: reviewID } = await params;
  const random = getRandomInt(2);

  if (random === 1) {
    throw new Error("Error loading review!");
  }
  if (parseInt(reviewID) > 1000) {
    notFound();
    // redirect("/products");
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
