import { styled } from "@mui/material/styles";
import { Card, Typography, Chip } from "@mui/material";

// Estilos para el Card
export const StyledCard = styled(Card)(({ theme }) => ({
  maxWidth: 345,
  minHeight: 400, // Altura mínima uniforme
  height: "100%", // Asegura que todas las tarjetas ocupen el mismo espacio
  boxShadow: theme.shadows[3],
  borderRadius: theme.shape.borderRadius,
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between", // Distribuye contenido equitativamente
  alignItems: "center",
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
  "&:hover": {
    transform: "scale(1.05)",
    boxShadow: theme.shadows[6],
  },
}));

export const StyledCardExperience = styled(Card)(({ theme }) => ({
  maxWidth: 700,
  boxShadow: theme.shadows[3],
  borderRadius: theme.shape.borderRadius,
  color: "#ffffff",
  padding: theme.spacing(3),
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
  "&:hover": {
    transform: "scale(1.05)",
    boxShadow: theme.shadows[6],
  },
  alignItems: "center"
}));

export const StyleEducationTitle = styled(Typography)(({ theme }) => ({
  color: "#00bcd4",
  fontWeight: "bold",
  fontSize: theme.typography.h5.fontSize,
  marginBottom: theme.spacing(1),
}));


export const StyleEducationSubtitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  fontStyle: "italic",
  marginBottom: theme.spacing(1.5),
}));


// Estilos para el título (Typography)
export const StyledTypographyTitle = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.h6.fontSize,
  fontWeight: theme.typography.fontWeightMedium,
  marginBottom: theme.spacing(1),
}));

// Estilos para los textos secundarios (Typography)
export const StyledTypographyText = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.body2.fontSize,
  color: theme.palette.text.secondary,
  marginBottom: theme.spacing(0.5),
}));

// Contenedor para los chips
export const StyledChipContainer = styled("div")({
  marginTop: "8px",
  display: "flex",
  gap: "4px",
  flexWrap: "wrap",
});

// Estilos para los chips
export const StyledChip = styled(Chip)(({ theme }) => ({
  backgroundColor: theme.palette.primary.light,
  color: theme.palette.primary.contrastText,
  fontSize: theme.typography.caption.fontSize,
  "&:hover": {
    backgroundColor: theme.palette.primary.main,
  },
}));
