import React, { useState }from "react";
import Switch from "@material-ui/core/Switch";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "../Themes";

const StyledApp = styled.div`
color: ${(props) => props.theme.fontColor};
`



const DarkMode = () => {
    const [theme, setTheme] = useState("light");
    const themeToggler = () => {
        theme === "light" ? setTheme("dark") : setTheme("light");
    };
    return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <StyledApp>
        <div className="darkMode__toggle">
            <FormControl component="fieldset">
                <FormGroup aria-label="position" row>
                    <FormControlLabel
                        value="top"
                        control={
                            <Switch
                              onClick={() => themeToggler()}
                            />
                        }
                        label="Dark Mode"
                        labelPlacement="top"
                    />
                </FormGroup>
            </FormControl>
            </div>
        </StyledApp>
    </ThemeProvider> 
    )
};

export default DarkMode;