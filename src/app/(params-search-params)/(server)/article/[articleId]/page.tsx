import type { Metadata } from "next";
import Link from "next/link";

type Props = {
  params: Promise<{ articleId: string }>;
  searchParams: Promise<{ lang: string }>;
};
export const generateMetadata = async ({
  searchParams,
}: Props): Promise<Metadata> => {
  const { lang } = await searchParams;

  return {
    title: { absolute: `Article - ${lang}` },
  };
};
export default async function LetterPage({ params, searchParams }: Props) {
  const { articleId } = await params;
  const { lang } = await searchParams;
  return (
    <div>
      <p>
        Article ID:&nbsp;
        {articleId.split(/-/g).map((name, index) => (
          <span key={index}>{name[0].toUpperCase() + name.slice(1)} </span>
        ))}
      </p>
      <p>Language: {lang[0].toUpperCase() + lang.slice(1)}</p>
      <p className="text-gray-600 dark:text-gray-400 my-4 max-w-lg mx-auto">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat minima
        veniam nihil. Nisi rem excepturi impedit est inventore, dicta, voluptas
        asperiores dolorem officiis autem ipsa obcaecati omnis nesciunt eveniet.
        Eius laboriosam impedit ex beatae quod, ad corrupti maiores doloremque
        iusto eligendi mollitia optio nam natus rem ipsum quis eos! Illum!
      </p>{" "}
      <div className="border-2 border-gray-400 bg-gray-400 flex justify-center items-center w-full py-2 my-10">
        <Link href={`/article`}>Back to Articles</Link>
      </div>
    </div>
  );
}
