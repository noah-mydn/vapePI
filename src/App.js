import { ThemeProvider } from "@emotion/react";
import "./App.css";
import { theme } from "./theme/theme";
import { Navigation } from "./components/Navigation/Navigation";
import { Home } from "./pages/Home";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navigation />
      <Home />
    </ThemeProvider>
  );
}

export default App;
