import type { ReactNode } from "react";

export function MainContent({ children }: { children: ReactNode }) {
  return (
    <main className="min-w-0 flex-1 overflow-x-clip [&:not(:has(.editorial-hero))]:pt-14">
      {children}
    </main>
  );
}
