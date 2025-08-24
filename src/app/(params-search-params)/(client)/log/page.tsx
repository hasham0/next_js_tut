import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Log",
};

type Props = {};
export default function Log({}: Props) {
  return (
    <div>
      <h1>Log</h1>
      <div className="flex justify-center gap-5 m-10">
        <Link href="/log/news-log?lang=en">log in English</Link>
        <Link href="/log/news-log?lang=urdu">log in Urdu</Link>
      </div>
    </div>
  );
}
