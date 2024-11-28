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
import { motion } from "framer-motion";

const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <StyleContainer>
      {/* Sección superior */}
      <StyleTopSection>
        {/* Bloque izquierdo */}
        <StyleLeftBlock>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <Typography variant="h4">¡Hola! Soy Jerson Moreno</Typography>
          </motion.div>
          <Typography variant="body1" color="text.secondary">
            Soy un desarrollador apasionado por construir aplicaciones modernas
            y elegantes. Bienvenido a mi portafolio, donde encontrarás
            información sobre mis proyectos, habilidades y experiencia.
          </Typography>

          {/* Botón debajo del texto */}
          <StyleCenterButton onClick={() => navigate("/experience")}>
            Ver Experiencia
          </StyleCenterButton>
        </StyleLeftBlock>

        {/* Bloque derecho */}
        <StyleRightBlock>
          <img src={Presentation} alt="Representativo" />
        </StyleRightBlock>
      </StyleTopSection>
    </StyleContainer>
  );
};

export default Home;
