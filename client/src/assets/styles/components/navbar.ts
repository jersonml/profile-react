// client/src/components/Navbar.styles.ts
import { styled } from '@mui/system';
import {  Typography } from '@mui/material';
import { Colors } from '../colors'; // Importa el enum de colores

export const StyledTypography = styled(Typography)({
  flexGrow: 1,
  color: Colors.ButtonColor, // Aplica el color del texto desde colors.ts
});