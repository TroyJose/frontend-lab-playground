import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";

// Define the type for our context
type ThemeContextType = {
  theme: "light" | "dark";
  toggleTheme: () => void;
};

// Create context with default value (will be overwritten by provider)
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Provider component
type ThemeProviderProps = {
  children: ReactNode;
};

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Custom hook to use the context easily
export function useTheme() { 
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}