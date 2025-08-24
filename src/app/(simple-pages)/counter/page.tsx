import type { Metadata } from "next";

import Counter from "./counter";

export const metadata: Metadata = {
  title: "Counter",
};
type Props = {};
export default function CounterPage({}: Props) {
  return (
    <div>
      <Counter />
    </div>
  );
}
