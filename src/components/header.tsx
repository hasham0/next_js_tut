"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {};

const Header = ({}: Props) => {
  const pathname = usePathname();
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/blog", label: "Blog" },
    { href: "/products", label: "Products" },
    { href: "/order", label: "Order" },
    { href: "/dashboard", label: "Dashboard" },
    { href: "/complex-dashboard", label: "Complex Dashboard" },
    { href: "/docs", label: "Docs" },
    { href: "/article", label: "Article" },
    { href: "/log", label: "Log" },
    { href: "/counter", label: "Counter" },
    { href: "/contact", label: "Contact" },
    { href: "/login", label: "Auth" },
  ];

  return (
    <div>
      <nav className="bg-white text-xl text-black py-3">
        <ul className="flex justify-evenly space-x-4">
          {navLinks.map((link) => {
            const isActive =
              pathname === link.href ||
              (pathname.startsWith(link.href) && link.href !== "/")
                ? "text-blue-500 font-bold"
                : "hover:text-blue-300";
            return (
              <li key={link.href}>
                <Link href={link.href} className={isActive}>
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default Header;
