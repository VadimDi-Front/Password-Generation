import { createRoot } from "react-dom/client";
import App from "./components/App/App.jsx";
import "./styles/index.css";
import { ThemeProvider } from "./components/ThemeContext.jsx";

createRoot(document.getElementById("root")).render(
  <>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </>,
);
