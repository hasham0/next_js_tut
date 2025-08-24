"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {};

const AuthHeader = ({}: Props) => {
  const pathname = usePathname();
  const navLinks = [
    { href: "/login", label: "Login" },
    { href: "/register", label: "Register" },
    { href: "/forgot-password", label: "Forgot Password" },
  ];

  return (
    <div>
      <nav className="bg-white text-xl text-black py-3">
        <ul className="flex justify-evenly space-x-4">
          {navLinks.map((link) => {
            const isActive =
              pathname === link.href ||
              (pathname.startsWith(link.href) && link.href !== "/")
                ? "text-blue-500 "
                : "hover:text-blue-300 font-bold";
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

export default AuthHeader;
