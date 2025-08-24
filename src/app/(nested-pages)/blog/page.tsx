import type { Metadata } from "next";
import Link from "next/link";

type Props = {};

export const metadata: Metadata = {
  title: "Blog",
};
export default function BlogPage({}: Props) {
  return (
    <div>
      <p>Blog page</p>
      <p className="text-gray-600 dark:text-gray-400 my-4 max-w-lg mx-auto">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat minima
        veniam nihil. Nisi rem excepturi impedit est inventore, dicta, voluptas
        asperiores dolorem officiis autem ipsa obcaecati omnis nesciunt eveniet.
        Eius laboriosam impedit ex beatae quod, ad corrupti maiores doloremque
        iusto eligendi mollitia optio nam natus rem ipsum quis eos! Illum!
      </p>
      <div className="border-2 border-gray-500 p-4 flex justify-evenly my-10">
        {Array.from({ length: 5 }).map((_, i) => (
          <Link key={i} href={`/blog/${i + 1}`} replace>
            Blog post {i + 1}
          </Link>
        ))}
      </div>
    </div>
  );
}
