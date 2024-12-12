// client/src/components/Navbar.tsx
import React from "react";
import { Link } from "react-router-dom";
import { NavbarText } from "../assets/text/navbar";
import {
  StyledAppBar,
  StyledToolbar,
  StyledTypography,
} from "../assets/styles/components/navbar";
import { RoutesText } from "../assets/text/routes";
import { Brightness7, Brightness4 } from "@mui/icons-material";
import { useTheme } from "@mui/material/styles"; // Para acceder al tema actual
import { useThemeContext } from "../context/ThemeContext";
import { StyledButton } from "../assets/styles/components/generic";

const Navbar: React.FC = () => {
  const theme = useTheme(); // Accede al tema actual
  const { toggleTheme } = useThemeContext(); // Obtén la función para alternar el tema

  const routes = [
    { path: RoutesText.home.path, label: RoutesText.home.label },
    { path: RoutesText.education.path, label: RoutesText.education.label },
    { path: RoutesText.experience.path, label: RoutesText.experience.label },
    { path: RoutesText.course.path, label: RoutesText.course.label },
    { path: RoutesText.skills.path, label: RoutesText.skills.label },
    { path: RoutesText.proyect.path, label: RoutesText.proyect.label },
    { path: RoutesText.contact.path, label: RoutesText.contact.label },
  ];

  return (
    <StyledAppBar position="static">
      <StyledToolbar>
        <StyledTypography variant="h6">{NavbarText.title}</StyledTypography>
        {/* Generar botones dinámicamente */}
        {routes.map((route, index) => (
          <StyledButton key={index} component={Link} to={route.path}>
            {route.label}
          </StyledButton>
        ))}
        <StyledButton onClick={toggleTheme} to={""}>
          {theme.palette.mode === "light" ? <Brightness7 /> : <Brightness4 />}
        </StyledButton>
      </StyledToolbar>
    </StyledAppBar>
  );
};

export default Navbar;
