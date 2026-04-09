import { useState } from "react";
import {
  Calendar,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  LayoutDashboard,
  Mail,
  MessagesSquare,
  Sheet,
  ShoppingBag,
  StepForward,
  StickyNote,
  UserRoundCog,
} from "lucide-react";
import { useSidebar } from "../../context/sidebarContext";

const Sidebar = () => {
  const [openDashboard, setOpenDashboard] = useState(true);
  const [openPages, setOpenPages] = useState(false);
  const [openEcommerce, setOpenEcommerce] = useState(false);
  const [openTables, setOpenTables] = useState(false);
  const { openSide, setOpenSide } = useSidebar();

  return (
    <div className="h-screen bg-[#1f2937] dark:bg-gray-950 text-gray-300 flex flex-col z-10 border-r border-gray-700 dark:border-gray-800 shadow-md">
      
      <div
        className={`${
          !openSide ? "w-10" : "w-64"
        } h-screen fixed flex flex-col 
        bg-[#1f2937] dark:bg-gray-950 text-gray-300 
        border-r border-gray-700 dark:border-gray-800 shadow-md transition-all duration-300`}
      >
        {openSide ? (
          <>
            {/* 🔝 Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-gray-700 dark:border-gray-800">
              <h1 className="text-lg font-bold text-white tracking-wide">
                HULK
              </h1>
              <ChevronLeft
                size={20}
                className="cursor-pointer"
                onClick={() => setOpenSide(!openSide)}
              />
            </div>

            {/* 🔽 Scroll Area */}
            <div className="flex-1 overflow-y-auto px-2 py-3 space-y-1">
              
              {/* Dashboard */}
              <div
                onClick={() => setOpenDashboard(!openDashboard)}
                className="flex items-center justify-between px-3 py-2 rounded hover:bg-gray-700 dark:hover:bg-gray-800 cursor-pointer"
              >
                <span className="flex items-center gap-3 text-sm font-medium">
                  <LayoutDashboard size={18} /> Dashboard
                </span>
                {openDashboard ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              </div>

              {openDashboard && (
                <div className="ml-6 text-sm space-y-1">
                  <div className="px-3 py-2 bg-gray-700 dark:bg-gray-800 rounded text-white">
                    Dashboard 1
                  </div>
                  <div className="px-3 py-2 hover:bg-gray-700 dark:hover:bg-gray-800 rounded cursor-pointer">
                    Dashboard 2
                  </div>
                  <div className="px-3 py-2 hover:bg-gray-700 dark:hover:bg-gray-800 rounded cursor-pointer">
                    Dashboard 3
                  </div>
                </div>
              )}

              {/* Pages */}
              <div
                onClick={() => setOpenPages(!openPages)}
                className="flex items-center justify-between px-3 py-2 rounded hover:bg-gray-700 dark:hover:bg-gray-800 cursor-pointer"
              >
                <span className="flex items-center gap-3 text-sm font-medium">
                  <StickyNote size={18} /> Pages
                </span>
                {openPages ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              </div>

              {openPages && (
                <div className="ml-6 text-sm space-y-1">
                  <div className="px-3 py-2 hover:bg-gray-700 dark:hover:bg-gray-800 rounded cursor-pointer">
                    Profile
                  </div>
                  <div className="px-3 py-2 hover:bg-gray-700 dark:hover:bg-gray-800 rounded cursor-pointer">
                    Pricing
                  </div>
                  <div className="px-3 py-2 hover:bg-gray-700 dark:hover:bg-gray-800 rounded cursor-pointer">
                    Timeline
                  </div>
                </div>
              )}

              {/* Full Page */}
              <div className="px-3 py-2 hover:bg-gray-700 dark:hover:bg-gray-800 rounded cursor-pointer">
                <span className="flex items-center gap-3 text-sm font-medium">
                  <StepForward size={18} /> Full Page Menu
                </span>
              </div>

              {/* Ecommerce */}
              <div
                onClick={() => setOpenEcommerce(!openEcommerce)}
                className="flex items-center justify-between px-3 py-2 rounded hover:bg-gray-700 dark:hover:bg-gray-800 cursor-pointer"
              >
                <span className="flex items-center gap-3 text-sm font-medium">
                  <ShoppingBag size={18} /> Ecommerce
                </span>
                {openEcommerce ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              </div>

              {openEcommerce && (
                <div className="ml-6 text-sm space-y-1">
                  <div className="px-3 py-2 hover:bg-gray-700 dark:hover:bg-gray-800 rounded cursor-pointer">
                    Shop
                  </div>
                  <div className="px-3 py-2 hover:bg-gray-700 dark:hover:bg-gray-800 rounded cursor-pointer">
                    Cart
                  </div>
                  <div className="px-3 py-2 hover:bg-gray-700 dark:hover:bg-gray-800 rounded cursor-pointer">
                    Checkout
                  </div>
                </div>
              )}

              {/* Tables */}
              <div
                onClick={() => setOpenTables(!openTables)}
                className="flex items-center justify-between px-3 py-2 rounded hover:bg-gray-700 dark:hover:bg-gray-800 cursor-pointer"
              >
                <span className="flex items-center gap-3 text-sm font-medium">
                  <Sheet size={18} /> Tables
                </span>
                {openTables ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              </div>

              {openTables && (
                <div className="ml-6 text-sm space-y-1">
                  <div className="px-3 py-2 hover:bg-gray-700 dark:hover:bg-gray-800 rounded cursor-pointer">
                    Basic Table
                  </div>
                  <div className="px-3 py-2 hover:bg-gray-700 dark:hover:bg-gray-800 rounded cursor-pointer">
                    Search Table
                  </div>
                </div>
              )}

              {/* Static Items */}
              <div className="px-3 py-2 hover:bg-gray-700 dark:hover:bg-gray-800 rounded cursor-pointer">
                <span className="flex items-center gap-3 text-sm font-medium">
                  <UserRoundCog size={18} /> User Settings
                </span>
              </div>

              <div className="px-3 py-2 hover:bg-gray-700 dark:hover:bg-gray-800 rounded cursor-pointer">
                <span className="flex items-center gap-3 text-sm font-medium">
                  <MessagesSquare size={18} /> Chat
                </span>
              </div>

              <div className="px-3 py-2 hover:bg-gray-700 dark:hover:bg-gray-800 rounded cursor-pointer">
                <span className="flex items-center gap-3 text-sm font-medium">
                  <Mail size={18} /> Email
                </span>
              </div>

              <div className="px-3 py-2 hover:bg-gray-700 dark:hover:bg-gray-800 rounded cursor-pointer">
                <span className="flex items-center gap-3 text-sm font-medium">
                  <Calendar size={18} /> Calendar
                </span>
              </div>
            </div>
          </>
        ) : (
          <ChevronRight
            size={20}
            className="cursor-pointer mx-auto mt-4"
            onClick={() => setOpenSide(!openSide)}
          />
        )}
      </div>
    </div>
  );
};

export default Sidebar;