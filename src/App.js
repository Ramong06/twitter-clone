import React, { useState } from "react";
import './App.css';
import Sidebar from "./Components/Sidebar";
import Feed from "./Components/Feed";
import Widgets from "./Components/Widgets";
import Switch from "./Components/Switch";
import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "./Components/Themes";

const StyledApp = styled.div`
`

function App() {
  const [theme, setTheme] = useState("light");

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  }
  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <StyledApp>
          <div className="App">

            {/* sidebar */}
            <Sidebar />
            
            {/* feed */}
            <Feed />

            {/* widgets */}
            <Widgets />

          <Switch onClick={() => themeToggler()}/>

          </div>
        </StyledApp>
    </ThemeProvider>  
  );
}

export default App;
