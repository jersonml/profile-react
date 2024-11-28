import { Box, Button } from '@mui/material';
import { styled } from '@mui/system';

// Imagen de ejemplo

// Estilos personalizados
export const StyleContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'center',
  height: '100vh',
  padding: theme.spacing(2),
  backgroundColor: theme.palette.background.default,
}));

export  const StyleTopSection = styled(Box)({
  display: 'flex',
  flex: 1,
  width: '100%',
});

export  const StyleLeftBlock = styled(Box)(({ theme }) => ({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'flex-start',
  padding: theme.spacing(4),
}));

export  const StyleRightBlock = styled(Box)( ({
  flex: 1,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  '& img': {
    width: "450px",
    height: "auto",
    borderRadius: "16px",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    animation: 'fadeIn 1s ease-out', // Animación al cargar
    boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.3)", // Sombra inicial
    "&:hover": {
      transform: "rotateY(15deg) rotateX(10deg) scale(1.1)", // Rotación y escalado en hover
      boxShadow: "0px 16px 40px rgba(0, 0, 0, 0.5)", // Sombra más fuerte
    },
  },
  '@keyframes fadeIn': {
    from: { opacity: 0, transform: 'translateY(50px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
  },
  
}));

export  const StyleCenterButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(4),
  padding: theme.spacing(2, 4),
  fontSize: '1rem',
  fontWeight: 'bold',
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  borderRadius: '8px',
  '&:hover': {
    backgroundColor: theme.palette.primary.dark,
  },
}));