// client/src/components/Navbar.styles.ts
import { styled } from '@mui/system';
import {  Typography, AppBar, Toolbar } from '@mui/material';
import { Colors } from '../colors'; // Importa el enum de colores

export const StyledTypography = styled(Typography)({
  flexGrow: 1,
  color: Colors.ButtonColor, // Aplica el color del texto desde colors.ts
});


export const StyledAppBar = styled(AppBar)(({ theme }) => ({
  color: Colors.PrimaryDark,
  borderRadius: "8px",
  boxShadow:
    theme.palette.mode === "dark"
      ? "0px 4px 10px rgba(255, 255, 255, 0.2)" // Sombra blanca en modo oscuro
      : "0px 4px 10px rgba(0, 0, 0, 0.2)", // Sombra negra en modo claro
  margin: "5px",
  padding: "0px",
  minHeight: "40px", // Ajusta la altura mínima del Navbar
  transition: "box-shadow 0.3s ease",
  "&:hover": {
    boxShadow:
      theme.palette.mode === "dark"
        ? "0px 8px 20px rgba(255, 255, 255, 0.3)" // Sombra blanca al pasar el mouse en oscuro
        : "0px 8px 20px rgba(0, 0, 0, 0.3)", // Sombra negra al pasar el mouse en claro
  },
}));


export const StyledToolbar = styled(Toolbar)({
  minHeight: "40px", // Ajusta la altura mínima del toolbar
});