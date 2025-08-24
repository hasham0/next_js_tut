import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};
const getRandomInt = (count: number) => {
  return Math.floor(Math.random() * count);
};

export default function ProductLayout({ children }: Props) {
  const random = getRandomInt(2);

  if (random === 1) {
    throw new Error("Error loading products!");
  }

  return (
    <div className="min-h-screen w-full flex items-center justify-center">
      {children}
    </div>
  );
}
