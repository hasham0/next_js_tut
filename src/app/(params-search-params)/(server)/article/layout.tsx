import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function ArticleLayout({ children }: Props) {
  return (
    <div className="min-h-screen w-full flex items-center justify-center">
      {children}
    </div>
  );
}
