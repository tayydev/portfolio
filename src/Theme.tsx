import React, {ReactNode} from "react";
import {createTheme, CssBaseline, Divider, Stack, ThemeProvider, Typography} from "@mui/material";
import "@fontsource/rubik"

interface MarkdownProps {
    [key: string]: React.ElementType;
}

export const MD_OVERRIDES: MarkdownProps = {
    h3: ({node, ...props}) =>
        <Stack direction={"column"} spacing={2}>
            <Typography variant={'h3'} {...props}></Typography>
            <Divider/>
        </Stack>
}

const theme = createTheme({
    palette: {
        primary: {
            light: 'rgb(120, 80, 150)',
            main: 'rgb(102, 51, 153)',
            dark: 'rgb(70, 30, 100)',
        },
        action: {
            active: 'rgb(102, 51, 153)',
            selected: 'rgb(120, 80, 150)'
        }
    },
    typography: {
        fontFamily: 'Rubik',
        h1: {
            fontWeight: '900',
            fontSize: '2.5em'
        },
        h3: {
            fontFamily: 'sans-serif',
            fontWeight: '800',
            fontSize: '1.25em'
        },
        body1: {
            fontSize: '2em',
        },

    },
    components: {
        MuiDivider: {
            styleOverrides: {
                root: {
                    backgroundColor: 'rgb(102, 51, 153)',
                    height: '4px',
                },
            },
        },
        // Add more overrides as needed
    },
})

interface ThemedProps {
    children: ReactNode
}

export default function Themed(props: ThemedProps) {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <React.StrictMode>
                {props.children}
            </React.StrictMode>
        </ThemeProvider>
    )
}