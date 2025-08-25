import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
};

export default async function Home() {
  const response = await fetch("http://localhost:3000/api/demo");
  const data = await response.json();
  return (
    <div>
      <p>Home page</p>
      <p className="text-gray-600 dark:text-gray-400 my-4 max-w-lg mx-auto">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem
        dicta, vitae veritatis mollitia aliquid incidunt, atque, tempore
        pariatur soluta officia modi laborum?
      </p>
      <p>{data.name}</p>
      <p>{data.url}</p>
    </div>
  );
}
