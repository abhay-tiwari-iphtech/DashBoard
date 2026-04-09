import {  useState } from "react";
import { SidebarContext } from "../../context/sidebarContext";

export const SidebarProvider = ({ children }) => {
  const [openSide, setOpenSide] = useState(false);

  return (
    <SidebarContext.Provider value={{ openSide, setOpenSide }}>
      {children}
    </SidebarContext.Provider>
  );
};

