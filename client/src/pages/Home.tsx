import React from "react";
import { Typography } from "@mui/material";
import {
  StyleCenterButton,
  StyleContainer,
  StyleLeftBlock,
  StyleRightBlock,
  StyleTopSection,
} from "../assets/styles/components/home";
import { useNavigate } from "react-router-dom";
import Presentation from "../assets/images/presentation-jerson.webp";

const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <StyleContainer>
      {/* Sección superior */}
      <StyleTopSection>
        {/* Bloque izquierdo */}
        <StyleLeftBlock>
          <Typography variant="h4" component="h1" gutterBottom>
            ¡Hola! 👋 Soy [Tu Nombre]
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Soy un desarrollador apasionado por construir aplicaciones modernas
            y elegantes. Bienvenido a mi portafolio, donde encontrarás
            información sobre mis proyectos, habilidades y experiencia.
          </Typography>
        </StyleLeftBlock>

        {/* Bloque derecho */}
        <StyleRightBlock>
          <img src={Presentation} alt="Representativo" />
        </StyleRightBlock>
      </StyleTopSection>

      {/* Botón central */}
      <StyleCenterButton onClick={() => navigate("/experience")}>
        Ver Experiencia
      </StyleCenterButton>
    </StyleContainer>
  );
};

export default Home;
