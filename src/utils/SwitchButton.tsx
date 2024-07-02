import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";
import ThemeMode from "./ThemeMode";

const SwitchModeButton = () => {
  const { toggleDarkMode, isDark } = ThemeMode();

  return (
    <button
      type="button"
      onClick={toggleDarkMode}
      className="rounded-full bg-neutral-900 p-2 button-box-shadow4 dark:bg-neutral-50"
    >
      {isDark ? (
        <span className="text-primary-900">
          <SunIcon className="h-6 w-6" />
        </span>
      ) : (
        <span className="text-primary-400">
          <MoonIcon className="h-6 w-6" />
        </span>
      )}
    </button>
  );
};

export default SwitchModeButton;
