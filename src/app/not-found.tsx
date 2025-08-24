import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Not Found",
};

export default function NotFound() {
  return (
    <div>
      <p>Page not found</p>
    </div>
  );
}
