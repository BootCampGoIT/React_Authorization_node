import React, { createContext } from "react";
import { ThemeProvider } from "styled-components";
import usePersistedTheme from "../hooks/usePersistedTheme";
import Header from "./header/Header";
import Main from "./main/Main";
import GlobalStyle from "../styles/globalStyles";

export const ThemeContext = createContext();

const App = () => {
  const [theme, setTheme] = usePersistedTheme();
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header />
        <Main />
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default App;
