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
import { HomeText } from "../assets/text/home";

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
            <Typography variant="h4">{HomeText.title}</Typography>
          </motion.div>
          <Typography variant="body1" color="text.secondary">
            {HomeText.message}
          </Typography>

          {/* Botón debajo del texto */}
          <StyleCenterButton onClick={() => navigate("/experience")}>
            {HomeText.button}
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
