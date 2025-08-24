import type { Metadata } from "next";

type Props = {};

export const metadata: Metadata = {
  title: "About",
};

export default function AboutPage({}: Props) {
  return (
    <div>
      <p>About page</p>
      <p className="text-gray-600 dark:text-gray-400 my-4 max-w-lg mx-auto">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat minima
        veniam nihil. Nisi rem excepturi impedit est inventore, dicta, voluptas
        asperiores dolorem officiis autem ipsa obcaecati omnis nesciunt eveniet.
        Eius laboriosam impedit ex beatae quod, ad corrupti maiores doloremque
        iusto eligendi mollitia optio nam natus rem ipsum quis eos! Illum!
      </p>
    </div>
  );
}
