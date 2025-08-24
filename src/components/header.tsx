import Link from "next/link";

type Props = {};

const Header = ({}: Props) => {
  return (
    <div>
      <nav className="bg-white text-xl text-black py-3">
        <ul className="flex justify-evenly space-x-4">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/blog">Blog</Link>
          </li>
          <li>
            <Link href="/products">Products</Link>
          </li>
          <li>
            <Link href="/docs">Docs</Link>
          </li>
          <li>
            <Link href="/counter">Counter</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
          <li>
            <Link href="/login">Login</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
