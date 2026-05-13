import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#3b82f6",
      dark: "#2563eb",
    },
    secondary: {
      main: "#60a5fa",
    },
    background: {
      default: "#0a0c10",
      paper: "#12161d",
    },
    text: {
      primary: "#e6e9ef",
      secondary: "#8b95a8",
    },
  },
  typography: {
    fontFamily: "'Inter', system-ui, -apple-system, sans-serif",
    h1: {
      fontFamily: "'Inter', sans-serif",
      fontWeight: 700,
      letterSpacing: "-0.5px",
    },
    h2: {
      fontFamily: "'Inter', sans-serif",
      fontWeight: 700,
      letterSpacing: "-0.4px",
    },
    h3: {
      fontWeight: 600,
    },
    button: {
      textTransform: "none",
      fontWeight: 600,
    },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "var(--radius-full)",
          paddingInline: 24,
          paddingBlock: 10,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: "var(--radius-lg)",
        },
      },
    },
  },
});

export default theme;
