import { createContext, useContext, useState, type ReactNode } from "react";

type PublishContextType = {
  open: boolean;
  openModal: () => void;
  closeModal: () => void;
};

const PublishContext = createContext<PublishContextType | null>(null);

export function PublishProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <PublishContext.Provider
      value={{ open, openModal: () => setOpen(true), closeModal: () => setOpen(false) }}
    >
      {children}
    </PublishContext.Provider>
  );
}

export function usePublish(): PublishContextType {
  const ctx = useContext(PublishContext);
  if (!ctx) throw new Error("usePublish must be used within PublishProvider");
  return ctx;
}
