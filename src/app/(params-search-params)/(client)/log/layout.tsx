import type { ReactNode } from "react";
import type { Metadata } from "next";

type Props = {
  children: ReactNode;
};

export const metadata: Metadata = {
  title: "Log",
};

export default function LogLayout({ children }: Props) {
  return (
    <div className="min-h-screen w-full flex items-center justify-center">
      {children}
    </div>
  );
}
