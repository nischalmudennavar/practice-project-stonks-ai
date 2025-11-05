"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_ITEMS } from "@/lib/contants";

const NavItems = () => {
  const pathname = usePathname();
  const isActive = (path: string) => {
    if (path === "/") return pathname === "/";
    return pathname.startsWith(path);
  };
  return (
    <ul className="flex flex-col sm:flex-row p-2 gap-3 sm:gap-10 font-medium">
      {NAV_ITEMS.map(({ href, label }) => (
        <li key={href}>
          <Link
            href={href}
            className={`hover:text-primary transition-colors ${
              isActive(href) ? "text-primary" : "text-gray-300"
            }`}
          >
            {label}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NavItems;
