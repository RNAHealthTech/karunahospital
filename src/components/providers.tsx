"use client";

import { ReactNode } from "react";
import { Toaster } from "react-hot-toast";
import { LanguageProvider } from "@/context/LanguageContext";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <LanguageProvider>
      <Toaster position="top-right" />
      {children}
    </LanguageProvider>
  );
}
