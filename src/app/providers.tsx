"use client";

import { SelectedPackageProvider } from "@/shared/lib/selected-package-context";

export function Providers({ children }: { children: React.ReactNode }) {
  return <SelectedPackageProvider>{children}</SelectedPackageProvider>;
}
