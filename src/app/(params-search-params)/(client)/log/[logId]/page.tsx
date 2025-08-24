"use client";

import { use } from "react";
import Link from "next/link";

type Props = {
  params: Promise<{ logId: string }>;
  searchParams: Promise<{ lang: string }>;
};

export default function LetterPage({ params, searchParams }: Props) {
  const { logId } = use(params);
  const { lang } = use(searchParams);
  return (
    <div>
      <p>
        Log ID:&nbsp;
        {logId.split(/-/g).map((name, index) => (
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
        <Link href={`/log`}>Back to Logs</Link>
      </div>
    </div>
  );
}
