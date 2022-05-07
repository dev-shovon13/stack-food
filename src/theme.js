import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    fontWeight: 400,
                },
            },
        },
    },
    palette: {
        primary: {
            contrastText: "#fff",
            dark: "##EF7822",
            light: "#0eafa0",
            main: "#EF7822",
        },
        secondary: {
            contrastText: "#444",
            dark: "#FAB70B",
            light: "#71708C",
            main: "#FAB70B",
        },
    },
});

export default theme;
