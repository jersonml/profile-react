import React from "react";
import Footer from "../components/Footer";
import Experience from "../components/Experience";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import { Container, Typography, Box } from "@mui/material";
import Layout from "../components/Layout";

const Home: React.FC = () => {
  return (
    <Layout>
      <Container maxWidth="md" sx={{ my: 4 }}>
        <Box sx={{ textAlign: "center", my: 4 }}>
          <Typography variant="h4" gutterBottom>
            Bienvenido a Mi Portafolio
          </Typography>
          <Typography variant="body1">
            Aquí encontrarás información sobre mi experiencia, habilidades y
            cómo contactarme.
          </Typography>
        </Box>
        <Box sx={{ my: 4 }}>
          <Typography variant="h5" gutterBottom>
            Experiencia
          </Typography>
          <Experience />
        </Box>
        <Box sx={{ my: 4 }}>
          <Typography variant="h5" gutterBottom>
            Habilidades
          </Typography>
          <Skills />
        </Box>
        <Box sx={{ my: 4 }}>
          <Typography variant="h5" gutterBottom>
            Contacto
          </Typography>
          <Contact />
        </Box>
      </Container>
      {/* <Footer /> */}
    </Layout>
  );
};

export default Home;
