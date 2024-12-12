import React from "react";
import { Typography, Box, Link } from "@mui/material";
import Grid from "@mui/material/Grid2";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import FlagIcon from "@mui/icons-material/Flag";
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

      {/* Nueva sección de contacto */}
      <Box
        sx={{
          padding: 4,
        }}
      >
        <Typography
          variant="h3"
          gutterBottom
          textAlign="center"
          // sx={{ marginBottom: 4, color: "#333" }}
        >
          {HomeText.subTitle}
        </Typography>
        <Grid container spacing={3} justifyContent="center" paddingLeft={25}>
          {/* LinkedIn */}
          <Grid size={{ xs: 12, sm: 6 }}>
            <Link
              href={HomeText.linkedin}
              target="_blank"
              underline="hover"
              sx={{
                fontSize: "1.2rem",
                display: "block",
                // color: "#0073b1",
                "&:hover": { color: "#005582" },
              }}
            >
              <Typography variant="body1" color="text.secondary">
                <LinkedInIcon>{HomeText.linkedin}</LinkedInIcon>
              </Typography>
            </Link>
          </Grid>
          {/* Email */}
          <Grid size={{ xs: 12, sm: 6 }}>
            <Link
              href="mailto:tu-email@ejemplo.com"
              underline="hover"
              sx={{
                fontSize: "1.2rem",
                display: "block",
                "&:hover": { color: "#b71c1c" },
              }}
            >
              <Typography variant="body1" color="text.secondary">
                <EmailIcon> {HomeText.email}</EmailIcon>
              </Typography>
            </Link>
          </Grid>
          {/* Teléfono */}
          <Grid size={{ xs: 12, sm: 6 }}>
            <Link
              href="tel:+1234567890"
              underline="hover"
              sx={{
                fontSize: "1.2rem",
                display: "block",
                color: "#388e3c",
                "&:hover": { color: "#2e7d32" },
              }}
            >
              <Typography variant="body1" color="text.secondary">
                <PhoneIcon>{HomeText.phone}</PhoneIcon>
              </Typography>
            </Link>
          </Grid>
          {/* País */}
          <Grid size={{ xs: 12, sm: 6 }}>
            <Typography
              variant="body1"
              sx={{
                fontSize: "1.2rem",
                color: "#666",
              }}
            >
              <Typography variant="body1" color="text.secondary">
                {HomeText.country}
              </Typography>
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </StyleContainer>
  );
};

export default Home;
