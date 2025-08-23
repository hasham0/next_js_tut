import Link from 'next/link';

type Props = {};

export default function ProductsPage({}: Props) {
  return (
    <div>
      <h1>ProductsPage</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 place-items-center gap-4 py-10">
        {Array.from({ length: 10 }).map((_, i) => (
          <Link key={i} href={`/products/${i + 1}`}>
            <div className="w-32 h-32 bg-gray-200 flex items-center justify-center text-black">
              Product {i + 1}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
