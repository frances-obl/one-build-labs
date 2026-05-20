"use client";
import {
  createContext,
  useContext,
  useState,
  type ReactNode,
} from "react";
import ContactModal from "@/components/ContactModal";

type ModalContextType = {
  open: (plan?: string) => void;
};

const ModalContext = createContext<ModalContextType>({ open: () => {} });

export function useContactModal() {
  return useContext(ModalContext);
}

export function ContactModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [initialPlan, setInitialPlan] = useState<string | undefined>();

  const open = (plan?: string) => {
    setInitialPlan(plan);
    setIsOpen(true);
  };

  return (
    <ModalContext.Provider value={{ open }}>
      {children}
      <ContactModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        initialPlan={initialPlan}
      />
    </ModalContext.Provider>
  );
}
