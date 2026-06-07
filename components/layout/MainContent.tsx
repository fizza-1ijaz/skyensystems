"use client";

import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

export function MainContent({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <div className={`min-w-0 flex-1 overflow-x-clip ${isHome ? "" : "pt-14"}`}>
      {children}
    </div>
  );
}
