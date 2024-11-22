// client/src/components/Navbar.tsx
import React from "react";
import { Button, AppBar, Toolbar } from "@mui/material";
import { Link } from "react-router-dom";
import { Colors } from "../assets/styles/colors";
import { NavbarText } from "../assets/text/navbar";
import { StyledTypography } from "../assets/styles/components/navbar";
import { RoutesText } from "../assets/text/routes";
import { useThemeContext } from "../context/ThemeContext";

const Navbar: React.FC = () => {
  const { toggleTheme } = useThemeContext(); // Obtén la función para alternar el tema

  return (
    <AppBar position="static" sx={{ color: Colors.PrimaryDark }}>
      <Toolbar>
        <StyledTypography variant="h6">{NavbarText.title}</StyledTypography>
        <Button
          sx={{ color: Colors.ButtonColor }}
          component={Link}
          to={RoutesText.home.path}
        >
          {RoutesText.home.label}
        </Button>
        <Button
          sx={{ color: Colors.ButtonColor }}
          component={Link}
          to={RoutesText.about.path}
        >
          {RoutesText.about.label}
        </Button>
        <Button sx={{ color: Colors.ButtonColor }} onClick={toggleTheme}>
          {NavbarText.theme}
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
