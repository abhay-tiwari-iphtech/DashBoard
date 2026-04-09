import React, { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";

const LightDark = () => {
  const [dark, setDark] = useState(false);

  // apply dark mode to html
  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  return (
    <div
      onClick={() => setDark(!dark)}
      className={`w-14 h-7 flex items-center rounded-full p-1 cursor-pointer transition-all duration-300
        ${dark ? "bg-gray-800" : "bg-gray-300"}`}
    >
      {/* Slider Circle */}
      <div
        className={`w-5 h-5 rounded-full bg-white shadow-md flex items-center justify-center transform transition-all duration-300
          ${dark ? "translate-x-7" : "translate-x-0"}`}
      >
        {dark ? (
          <Moon size={14} className="text-gray-700" />
        ) : (
          <Sun size={14} className="text-yellow-500" />
        )}
      </div>
    </div>
  );
};

export default LightDark;