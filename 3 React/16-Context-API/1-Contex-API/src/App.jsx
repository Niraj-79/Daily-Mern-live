import { useState } from "react";
import Welcome from "./components/Welcome";
import ThemeToggle from "./ThemeToggle";
import ThemeContext from "./store/ThemeContext";

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme == "light" ? "dark" : "light"));
  };

  //// first method
  // return (
  //   <>
  //     <ThemeContext.Provider value={{ theme: theme, toggleTheme: toggleTheme }}>
  //       <Welcome />
  //       <ThemeToggle />
  //     </ThemeContext.Provider>
  //   </>
  // );

  //// second method
  const contextVal = {
    theme: theme,
    toggleTheme: toggleTheme,
  };

  return (
    <>
      <ThemeContext.Provider value={contextVal}>
        <Welcome />
        <ThemeToggle />
      </ThemeContext.Provider>
    </>
  );
}

export default App;
