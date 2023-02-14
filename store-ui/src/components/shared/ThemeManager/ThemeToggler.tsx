import React from 'react';
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { createContext, useMemo, useState } from "react";

export const ColorModeContext = createContext({ toggleColorMode: () => { } })

export const ThemeToggler = (props: {children: JSX.Element}) => {
    const [mode, setMode] = useState<'light' | 'dark'>('light')
    const colorMode = useMemo(
        () => ({
            toggleColorMode: () => {
                setMode((preMode) => (preMode === 'light' ? 'dark' : 'light'))
            }
        }),
        []
    );

    const theme = useMemo(
        () =>
            createTheme({
                palette: {
                    mode,
                },
            }),
        [mode],
    );


    return (
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
            {props.children}
        </ThemeProvider>
      </ColorModeContext.Provider>
    );
            
}
