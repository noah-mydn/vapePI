import { ThemeProvider } from "@emotion/react";
import "./App.css";
import { theme } from "./theme/theme";
import { Navigation } from "./components/Navigation/Navigation";
import { Home } from "./pages/Home";
import { Alert, AlertTitle, Box, useMediaQuery } from "@mui/material";

function App() {
  const mobileDevice = useMediaQuery("(max-width:480px)");
  const tabletDevice = useMediaQuery("(max-width:600px)");

  return (
    <ThemeProvider theme={theme}>
      {tabletDevice && (
        <>
          <Navigation />
          <Home mobileDevice={mobileDevice} tabletDevice={tabletDevice} />
        </>
      )}
      {!tabletDevice && (
        <Box
          height="95vh"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Alert severity="error" variant="filled">
            <AlertTitle>Device-width Incompatibility</AlertTitle>
            This website is optimized for a mobile device only! <br /> Please
            view the website on mobile device to enjoy the full experience!!!
          </Alert>
        </Box>
      )}
    </ThemeProvider>
  );
}

export default App;
