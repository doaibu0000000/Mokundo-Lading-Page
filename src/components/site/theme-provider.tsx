"use client";

import { useEffect } from "react";
import { ThemeProvider as NextThemesProvider, useTheme } from "next-themes";

/** Sinkronkan meta theme-color dengan tema aktif (address bar Android/iOS ikut dark/light). */
function ThemeColorSync() {
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    const meta = document.querySelector('meta[name="theme-color"]');
    if (!meta) return;
    meta.setAttribute("content", resolvedTheme === "dark" ? "#020617" : "#ffffff");
  }, [resolvedTheme]);

  return null;
}

/** Provider tema (dark/light) — attribute="class" dipakai oleh @custom-variant dark di globals.css. */
export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
    >
      <ThemeColorSync />
      {children}
    </NextThemesProvider>
  );
}
