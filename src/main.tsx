import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./tailwind.css";
import App from "./App.tsx";
import MobileHeader from "./components/layout/MobileHeader.tsx";
import Footer from "./components/layout/Footer.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MobileHeader />
    <App />
    <Footer />
  </StrictMode>
);
