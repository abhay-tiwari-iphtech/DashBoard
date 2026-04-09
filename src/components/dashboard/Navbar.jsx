import { useState } from "react";
import {
  Search,
  Bell,
  ShoppingCart,
  Maximize,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import LightDark from "./LightDark";

const Navbar = () => {
  const [langOpen, setLangOpen] = useState(false);

  const toggleFullScreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  };

  return (
    <div className="w-full h-14 bg-white border-b border-gray-200 flex items-center justify-between px-3 md:px-4 shadow-md sticky top-0 left-0 dark:bg-gray-900 dark:text-white z-50">

      {/* LEFT SIDE */}
      <div className="flex items-center gap-2 md:gap-4">
        <Search className="text-gray-500 cursor-pointer w-5 h-5 md:w-6 md:h-6" />

        {/* Hide on small screens */}
        <button className="hidden sm:block bg-blue-100 text-blue-600 text-xs md:text-sm px-2 md:px-3 py-1 rounded-md font-medium">
          Mega Menu
        </button>
      </div>

      {/* RIGHT SIDE */}
      <div className="flex items-center gap-3 md:gap-5">

        {/* Notification */}
        <Bell className="text-gray-600 cursor-pointer w-5 h-5 md:w-6 md:h-6" />

        {/* 🌍 Language Dropdown */}
        <div className="relative">
          <div
            onClick={() => setLangOpen(!langOpen)}
            className="flex items-center gap-1 md:gap-2 cursor-pointer px-1 md:px-2 py-1 rounded"
          >
            <img
              src="https://flagcdn.com/w40/us.png"
              alt="flag"
              className="w-4 h-3 md:w-5 md:h-4"
            />
            {langOpen ? <ChevronUp size={16}/> : <ChevronDown size={16}/>}
          </div>

          {/* Dropdown */}
          {langOpen && (
            <div className="absolute right-0 mt-2 bg-white dark:bg-gray-800 shadow-lg rounded text-sm p-2 w-28">
              <p className="cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 px-2 py-1">English</p>
              <p className="cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 px-2 py-1">Hindi</p>
            </div>
          )}
        </div>

        {/* 🛒 Cart */}
        <div className="relative cursor-pointer">
          <ShoppingCart className="text-gray-600 w-5 h-5 md:w-6 md:h-6" />
          <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-[10px] md:text-xs px-1.5 rounded-full">
            2
          </span>
        </div>

        {/* Light/Dark */}
        <LightDark />

        {/* ⛶ Fullscreen (hide on very small screens) */}
        <Maximize
          className="hidden sm:block text-gray-600 cursor-pointer w-5 h-5 md:w-6 md:h-6"
          onClick={toggleFullScreen}
        />

        {/* 👤 Profile */}
        <img
          src="https://i.pravatar.cc/40"
          alt="profile"
          className="w-7 h-7 md:w-8 md:h-8 rounded-full cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Navbar;