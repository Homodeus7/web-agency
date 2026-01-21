"use client";

import {
  createContext,
  useContext,
  useState,
  useCallback,
  type ReactNode,
} from "react";

interface SelectedPackageContextValue {
  selectedPackage: string | null;
  selectPackage: (packageName: string) => void;
  clearPackage: () => void;
}

const SelectedPackageContext = createContext<SelectedPackageContextValue | null>(null);

export function SelectedPackageProvider({ children }: { children: ReactNode }) {
  const [selectedPackage, setSelectedPackage] = useState<string | null>(null);

  const selectPackage = useCallback((packageName: string) => {
    setSelectedPackage(packageName);
  }, []);

  const clearPackage = useCallback(() => {
    setSelectedPackage(null);
  }, []);

  return (
    <SelectedPackageContext.Provider
      value={{ selectedPackage, selectPackage, clearPackage }}
    >
      {children}
    </SelectedPackageContext.Provider>
  );
}

export function useSelectedPackage() {
  const context = useContext(SelectedPackageContext);
  if (!context) {
    throw new Error(
      "useSelectedPackage must be used within SelectedPackageProvider"
    );
  }
  return context;
}
