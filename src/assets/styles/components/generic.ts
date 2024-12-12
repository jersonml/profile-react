import { styled } from "@mui/system";
import { Button, ButtonProps } from "@mui/material"; // Importa ButtonProps
import { LinkProps } from "react-router-dom";
import { Colors } from "../colors";

type StyledButtonProps = ButtonProps & LinkProps;

export const StyledButton = styled(Button)<StyledButtonProps>(({ theme }) => ({
    color: Colors.ButtonColor,
    transition: "all 0.3s ease", // Transición para un efecto suave
    backgroundColor:"primary",
    "&:hover": {
      backgroundColor:
        theme.palette.mode === "light"
          ? "rgba(0, 0, 0, 0.1)" // Fondo gris claro en modo claro
          : "rgba(255, 255, 255, 0.2)", // Fondo blanco semitransparente en modo oscuro
      color:
        theme.palette.mode === "light"
          ? Colors.PrimaryDark // Texto más oscuro en modo claro
          : Colors.PrimaryLight, // Texto más claro en modo oscuro
      boxShadow:
        theme.palette.mode === "light"
          ? "0px 4px 15px rgba(0, 0, 0, 0.2)" // Sombra negra suave en modo claro
          : "0px 4px 15px rgba(255, 255, 255, 0.3)", // Sombra blanca en modo oscuro
    },
    "&:active": {
      transform: "scale(0.95)", // Reduce el tamaño ligeramente al hacer click
    },
  }));
  