import serverSideFunction from "@/utils/server-utils";

type Props = {};

export default function ServerPage({}: Props) {
  const result = serverSideFunction();
  console.log("🚀 ~ ServerPage ~ result:", result);
  return <div>ServerPage</div>;
}
