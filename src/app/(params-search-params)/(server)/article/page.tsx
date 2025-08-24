import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Article",
};

type Props = {};
export default function Article({}: Props) {
  return (
    <div>
      <h1>Article</h1>
      <div className="flex justify-center gap-5 m-10">
        <Link href="/article/news-article?lang=en">Read in English</Link>
        <Link href="/article/news-article?lang=urdu">Read in Urdu</Link>
      </div>
    </div>
  );
}
