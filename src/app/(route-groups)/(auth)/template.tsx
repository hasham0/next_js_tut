import type { ReactNode } from "react";

import AuthHeader from "@/components/auth-header";

type Props = {
  children: ReactNode;
};

export default function AuthTemplate({ children }: Props) {
  return (
    <>
      <AuthHeader />
      <div className="min-h-screen w-full flex items-center justify-center">
        {children}
      </div>
    </>
  );
}
