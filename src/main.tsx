import { BrowserRouter } from "react-router-dom";
import App from "./App";
import ReactDOM from "react-dom/client";
import React from "react";
import { ThemeProviderWrapper } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import { GlobalStyles } from "@mui/material";
import { Colors } from "./assets/styles/colors";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProviderWrapper>
        <GlobalStyles
          styles={({ palette }) => ({
            body: {
              // Fondo dinámico según el tema
              background:
                palette.mode === "dark"
                  ? Colors.BackgroundDark // Gradiente oscuro
                  : Colors.BackgroundLight, // Gradiente claro (rosas, melón y durazno)
              backgroundSize: "400% 400%", // Tamaño del gradiente para que se vea bien extendido
              animation: "gradientShift 15s ease infinite", // Animación suave del gradiente
              color: palette.mode === "dark" ? "#fff" : "#000", // Color del texto según el tema
              transition: "background 0.3s ease, color 0.3s ease", // Transición suave para el cambio de fondo
              minHeight: "100vh", // Asegura que el fondo ocupe toda la altura de la pantalla
              margin: 0, // Eliminar márgenes predeterminados
            },
            "@keyframes gradientShift": {
              "0%": {
                backgroundPosition: "0% 50%",
              },
              "50%": {
                backgroundPosition: "100% 50%",
              },
              "100%": {
                backgroundPosition: "0% 50%",
              },
            },
          })}
        />
        <Navbar />
        <App />
      </ThemeProviderWrapper>
    </BrowserRouter>
  </React.StrictMode>
);
