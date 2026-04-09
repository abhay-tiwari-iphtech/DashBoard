import { createContext, useContext } from "react";

export const SidebarContext = createContext();

// simple hook
export const useSidebar = () => useContext(SidebarContext);