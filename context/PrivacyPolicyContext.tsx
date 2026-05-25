"use client";
import { createContext, useContext, useState, type ReactNode } from "react";
import PrivacyPolicyModal from "@/components/PrivacyPolicyModal";

type PrivacyContextType = {
  open: () => void;
};

const PrivacyContext = createContext<PrivacyContextType>({ open: () => {} });

export function usePrivacyPolicy() {
  return useContext(PrivacyContext);
}

export function PrivacyPolicyProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <PrivacyContext.Provider value={{ open: () => setIsOpen(true) }}>
      {children}
      <PrivacyPolicyModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </PrivacyContext.Provider>
  );
}
