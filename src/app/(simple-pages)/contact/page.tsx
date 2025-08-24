import type { Metadata } from "next";

type Props = {};

export const metadata: Metadata = {
  title: "Contact",
};
export default function ContactPage({}: Props) {
  return (
    <div>
      <p>Contact page</p>
      <p className="text-gray-600 dark:text-gray-400 my-4 max-w-lg mx-auto">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
        sapiente deleniti, optio aut maiores a dolorum harum error, voluptas
        voluptates illo ea id molestias nisi inventore mollitia nostrum iure
        omnis laborum totam esse asperiores et!
      </p>
    </div>
  );
}
