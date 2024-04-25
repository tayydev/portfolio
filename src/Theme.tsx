import React, { ReactNode } from "react";
import {
    Box,
    createTheme,
    CssBaseline,
    Divider,
    Link,
    Stack,
    ThemeProvider,
    Typography,
} from "@mui/material";
import Image from "next/image";
// import "@fontsource/rubik"

interface MarkdownProps {
    [key: string]: React.ElementType;
}

export const MD_OVERRIDES: MarkdownProps = {
    h3: ({ node, ...props }) => (
        <Stack direction={"column"} spacing={2}>
            <Typography variant={"h3"} {...props}></Typography>
            <Divider />
        </Stack>
    ),
    h2: (
        { node, ...props }, //this is goofy because h2 is the caption and h3 is the header TODO spin around
    ) => (
        <Typography
            variant={"subtitle1"}
            textAlign={"center"}
            color={"dimgrey"}
            {...props}
        />
    ),
    img: ({ node, alt, ...props }) => (
        <Stack direction={"column"}>
            <Stack direction={"row"} justifyContent="center">
                <img style={{ maxWidth: "90%" }} {...props} alt={alt} />
            </Stack>
            <Typography
                variant={"subtitle1"}
                textAlign={"center"}
                color={"dimgrey"}
            >
                {alt}
            </Typography>
        </Stack>
    ),
    a: ({ node, href, ...props }) => <Link href={href} {...props}></Link>,
    p: (props) => <Box {...props} />,
};

const theme = createTheme({
    palette: {
        primary: {
            light: "rgb(120, 80, 150)",
            main: "rgb(102, 51, 153)",
            dark: "rgb(70, 30, 100)",
        },
        action: {
            active: "rgb(102, 51, 153)",
            selected: "rgb(120, 80, 150)",
        },
    },
    typography: {
        fontFamily: "Rubik",
        h1: {
            fontWeight: 900,
            fontSize: "min(3em, 10vw)",
        },
        h2: {
            fontFamily: "sans-serif",
            fontWeight: "900",
            fontSize: "1.75em",
        },
        h3: {
            fontFamily: "sans-serif",
            fontWeight: "800",
            fontSize: "1.25em",
        },
        body1: {
            fontSize: "min(1.5em, 7vw)",
            lineHeight: "125%",
        },
    },
    components: {
        MuiDivider: {
            styleOverrides: {
                root: {
                    backgroundColor: "rgb(102, 51, 153)",
                    height: "4px",
                },
            },
        },
        // Add more overrides as needed
    },
});

interface ThemedProps {
    children: ReactNode;
}

export default function Themed(props: ThemedProps) {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <React.StrictMode>{props.children}</React.StrictMode>
        </ThemeProvider>
    );
}
