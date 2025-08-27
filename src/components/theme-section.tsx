"use client";

import { useTheme } from "@/app/(context)/wrapper/ContextWrapper";
import clientSideFunction from "@/utils/client-utils";

type Props = {};

const ThemeSection = ({}: Props) => {
  const result = clientSideFunction();
  console.log("🚀 ~ ThemeSection ~ result:", result);
  const { currentTheme, setCurrentTheme } = useTheme();
  return (
    <div
      style={{
        backgroundColor: currentTheme === "light" ? "#f0f0f0" : "#333",
        color: currentTheme === "light" ? "#000" : "#fff",
        padding: "20px",
      }}
    >
      <h1>{currentTheme}</h1>
      <div className="space-x-8">
        <button onClick={() => setCurrentTheme("light")}>Light Theme</button>
        <button onClick={() => setCurrentTheme("dark")}>Dark Theme</button>
      </div>
    </div>
  );
};

export default ThemeSection;
