"use client";

import useLocalStorage from "./useLocalStorage";

export default function useTheme() {
  const [theme, setTheme] = useLocalStorage(
    "theme",
    "light"
  );

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return {
    theme,
    toggleTheme,
  };
}