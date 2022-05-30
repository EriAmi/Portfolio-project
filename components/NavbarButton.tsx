import Link from "next/link";
import React from "react";

export default function NavbarButton({ href, text }: { href: string; text: string }) {
  return (
    <Link href={href}>
      <a
        className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
        href="/"
      >
        <span className="ml-2">{text}</span>
      </a>
    </Link>
  );
}
