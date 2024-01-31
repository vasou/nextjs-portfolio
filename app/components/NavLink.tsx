"use client";

import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";

interface NavLinkProps {
  href: string;
  name: string;
}

export default function NavLink({ href, name }: NavLinkProps) {
  const selectedLayoutSegment = useSelectedLayoutSegment();
  const pathname = selectedLayoutSegment ? `/${selectedLayoutSegment}` : "/";
  const isActive = pathname === href;
  return (
    <Link href={href} className={`${isActive ? "active" : ""}`}>
      {name}
      <span></span>
    </Link>
  );
}
