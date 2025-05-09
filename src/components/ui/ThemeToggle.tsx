import React, { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../context/ThemeProvider";
import { Moon, Sun } from "lucide-react";

const ThemeToggle: React.FC = () => {
  const context = useContext(ThemeContext);
  const [localTheme, setLocalTheme] = useState<"light" | "dark">("light");
  
  // Initialize local theme state if no context
  useEffect(() => {
    if (!context) {
      const savedTheme = localStorage.getItem("theme") as "light" | "dark";
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      const initialTheme = savedTheme || (prefersDark ? "dark" : "light");
      
      setLocalTheme(initialTheme);
      
      if (initialTheme === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    }
  }, [context]);
  
  // Use context if available, otherwise use local state
  const theme = context?.theme || localTheme;
  
  const toggleTheme = () => {
    if (context) {
      // Use context toggle if available
      context.toggleTheme();
    } else {
      // Otherwise handle it locally
      const newTheme = theme === "light" ? "dark" : "light";
      setLocalTheme(newTheme);
      
      if (newTheme === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
      
      localStorage.setItem("theme", newTheme);
    }
  };

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle dark mode"
      className="rounded-full p-2 transition-colors hover:bg-gray-200 dark:hover:bg-gray-700"
    >
      {theme === "dark" ? (
        <Sun className="h-5 w-5 text-yellow-400" />
      ) : (
        <Moon className="h-5 w-5 text-gray-700" />
      )}
    </button>
  );
};

export default ThemeToggle; 