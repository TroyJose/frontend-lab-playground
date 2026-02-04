# React useContext with TypeScript

This is a simple example of using **React Context** with **TypeScript** to create a theme switcher (light/dark mode) in a **single file**.
---

## Single File Example

```tsx
// App.tsx
import React, { createContext, useContext, useState, ReactNode } from "react";

// 1. Define the Context
type ThemeContextType = {
  theme: "light" | "dark";
  toggleTheme: () => void;
};
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// 2. Create the Provider
type ThemeProviderProps = {
  children: ReactNode;
};
const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// 3. Create a Custom Hook
const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

// 4. Consume the Context in a Component
const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div
      style={{
        background: theme === "light" ? "#fff" : "#333",
        color: theme === "light" ? "#000" : "#fff",
        padding: "20px",
        minHeight: "100vh",
      }}
    >
      <p>Current theme: {theme}</p>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};

// 5. Wrap your App with the Provider
export default function App() {
  return (
    <ThemeProvider>
      <ThemeSwitcher />
    </ThemeProvider>
  );
}