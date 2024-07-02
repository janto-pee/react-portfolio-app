import { useEffect } from "react";
import { createGlobalState } from "react-hooks-global-state";
const initialState = { isDarkMode: false };
const { useGlobalState } = createGlobalState(initialState);

const ThemeMode = () => {
  const [isDark, setIsDark] = useGlobalState("isDarkMode");

  useEffect(() => {
    toggleDarkMode();
  }, []);

  const toggleDarkMode = () => {
    if (localStorage.theme === "dark") {
      toLight();
    } else {
      toDark();
    }
  };

  const toLight = () => {
    setIsDark(false);
    const root = document.querySelector("html");
    if (!root) return;
    root.classList.remove("dark");
    localStorage.theme = "light";
  };

  const toDark = () => {
    setIsDark(true);
    const root = document.querySelector("html");
    if (!root) return;
    !root.classList.contains("dark") && root.classList.add("dark");
    localStorage.theme = "dark";
  };
  return { toLight, toDark, isDark, toggleDarkMode };
};

export default ThemeMode;
