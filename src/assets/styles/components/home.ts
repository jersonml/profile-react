import { Box, Button } from '@mui/material';
import { styled } from '@mui/system';

// Imagen de ejemplo

// Estilos personalizados
export const StyleContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
  padding: theme.spacing(2),
  backgroundColor: theme.palette.background.default,
}));

export  const StyleTopSection = styled(Box)({
  display: 'flex',
  // flex: 1,
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

export const StyleCenterButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: '#fff',
  fontSize: '18px',
  fontWeight: 'bold',
  padding: '12px 24px',
  borderRadius: '25px',
  boxShadow: '0 6px 12px rgba(0, 0, 0, 0.1)',
  transition: 'all 0.3s ease',
  marginTop: '30px', // Ajustar el margen superior para que quede debajo del texto
  '&:hover': {
    backgroundColor: theme.palette.primary.dark,
    transform: 'scale(1.05)',
    boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)', // Efecto de sombra en hover
  },
  '&:active': {
    transform: 'scale(0.98)',
  },
}));