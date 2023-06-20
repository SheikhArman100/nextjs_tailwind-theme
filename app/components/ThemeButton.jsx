"use client"
import { useTheme } from 'next-themes';
import { MdOutlineWbSunny } from "react-icons/md";
import { HiMoon } from "react-icons/hi";
import { useEffect, useState } from 'react';
const ThemeButton = () => {
    const { resolvedTheme, setTheme } = useTheme();
      const [mounted, setMounted] = useState(false);
      useEffect(() => setMounted(true), []);

      if (!mounted) {
        return null;
      }
  return (
    <button
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className=" p-1 rounded bg-black text-white dark:bg-white dark:text-black "
    >
      {resolvedTheme === "light" ? (
        <HiMoon className="" />
      ) : (
        <MdOutlineWbSunny className="" />
      )}
    </button>
  );
}

export default ThemeButton