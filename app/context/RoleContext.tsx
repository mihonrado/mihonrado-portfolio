"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

export type RoleMode = "web" | "va";

interface RoleContextType {
  role: RoleMode;
  setRole: (role: RoleMode) => void;
  toggleRole: () => void;
}

const RoleContext = createContext<RoleContextType | undefined>(undefined);

export const RoleProvider = ({ children }: { children: ReactNode }) => {
  const [role, setRole] = useState<RoleMode>("web");

  const toggleRole = () => {
    setRole((prev) => (prev === "web" ? "va" : "web"));
  };

  return (
    <RoleContext.Provider value={{ role, setRole, toggleRole }}>
      {children}
    </RoleContext.Provider>
  );
};

export const useRole = () => {
  const context = useContext(RoleContext);
  if (context === undefined) {
    throw new Error("useRole must be used within a RoleProvider");
  }
  return context;
};
