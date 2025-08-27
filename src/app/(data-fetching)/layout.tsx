import type { ReactNode } from "react";

import DataHeader from "@/components/data-header";

type Props = {
  children: ReactNode;
};

export default function DataLayout({ children }: Props) {
  return (
    <>
      <DataHeader />
      {children}
    </>
  );
}
