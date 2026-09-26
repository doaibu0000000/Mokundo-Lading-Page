"use client";

import { Moon, Sun } from "lucide-react";
import { useSyncExternalStore } from "react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

const emptySubscribe = () => () => {};
const clientSnapshot = () => true;
const serverSnapshot = () => false;

/**
 * Tombol ganti tema terang/gelap.
 * - Ikon dianimasikan via varian `dark:` (CSS murni) → tidak berkedip saat hydration.
 * - Status "mounted" didapat via useSyncExternalStore (bebas warning react-hooks/set-state-in-effect),
 *   hanya untuk memastikan aria-label akurat setelah hydration.
 */
export function ThemeToggle({ className }: { className?: string }) {
  const { resolvedTheme, setTheme } = useTheme();
  const mounted = useSyncExternalStore(emptySubscribe, clientSnapshot, serverSnapshot);

  function handleToggle() {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  }

  return (
    <Button
      variant="outline"
      size="icon"
      aria-label={
        mounted && resolvedTheme === "dark" ? "Aktifkan mode terang" : "Aktifkan mode gelap"
      }
      className={className}
      onClick={handleToggle}
    >
      <Sun
        aria-hidden="true"
        className="h-5 w-5 rotate-0 scale-100 transition-all duration-300 dark:-rotate-90 dark:scale-0"
      />
      <Moon
        aria-hidden="true"
        className="absolute h-5 w-5 rotate-90 scale-0 transition-all duration-300 dark:rotate-0 dark:scale-100"
      />
    </Button>
  );
}
