export const dynamicParams = true;
type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { id } = await params;
  return {
    title: `Shop Item ${id}`,
    description: `Details about shop item ${id}`,
  };
}

export async function generateStaticParams() {
  return [{ id: "1" }, { id: "2" }, { id: "3" }];
}

export default async function SingleItem({ params }: Props) {
  const { id } = await params;
  return <div>Item ID: {id}</div>;
}
