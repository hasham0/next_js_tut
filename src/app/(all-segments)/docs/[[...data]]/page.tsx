import type { Metadata } from "next";

type Props = {
  params: Promise<{ data: string[] }>;
};
export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const { data } = await params;
  if (data?.length === 1) {
    return {
      title: `Docs - ${data[0]}`,
    };
  }

  if (data?.length > 1) {
    return {
      title: `Docs - ${data.join(", ")}`,
    };
  }
  return {
    title: "Docs",
  };
};

export default async function DocsPage({ params }: Props) {
  const { data } = await params;
  if (data?.length === 1) {
    return <p>docs data {data[0]}</p>;
  }
  if (data?.length > 1) {
    return <p>docs data {data.join(", ")}</p>;
  }
  return (
    <div>
      <p>Docs page</p>
      <p className="text-gray-600 dark:text-gray-400 my-4 max-w-lg mx-auto">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem
        dicta, vitae veritatis mollitia aliquid incidunt, atque, tempore
        pariatur soluta officia modi laborum?
      </p>
    </div>
  );
}
