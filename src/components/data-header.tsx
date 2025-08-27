"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const DataHeader = () => {
  const pathname = usePathname();
  const navLinks = [
    { href: "/client-side", label: "client" },
    { href: "/server-side", label: "server" },
    { href: "/sequential-side", label: "sequential" },
    { href: "/database-side", label: "database" },
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
                <Link href={link.href} className={isActive} replace prefetch>
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

export default DataHeader;
