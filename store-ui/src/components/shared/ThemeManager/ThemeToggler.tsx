import React from 'react';
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { useMemo } from "react";
import { useSelector } from 'react-redux/es/exports';
import { selectTheme } from '../../../store/ThemeSlice';

export const ThemeToggler = (props: { children: JSX.Element }) => {
    const mode = useSelector(selectTheme)

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
        <ThemeProvider theme={theme}>
            <CssBaseline />
            {props.children}
        </ThemeProvider>
    );

}
