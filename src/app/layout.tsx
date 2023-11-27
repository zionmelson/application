"use client";
import "./globals.css";
import { useState, createContext, useEffect } from "react";

export const ThemeContext: any = createContext(null);

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "");

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "" : "light");
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <html lang="en">
        <body
          className={theme === "" ? "App" : "App-light"}
          id={theme === "" ? "" : "light"}
        >
          <div className="theme">
            <button onClick={toggleTheme} className="theme-button">
              {theme === "" ? (
                <h4 className="h4">darkmode</h4>
              ) : (
                <h4 className="h4">lightmode</h4>
              )}
            </button>
          </div>
          <main>{children}</main>
        </body>
      </html>
    </ThemeContext.Provider>
  );
}
