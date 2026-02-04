import { ThemeProvider } from "./ThemeContext";
import ThemeSwitcher from "./ThemeSwitcher";

export default function App() {
  return (
    <ThemeProvider>
      <ThemeSwitcher />
    </ThemeProvider>
  );
}