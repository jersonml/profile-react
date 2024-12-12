import React from "react";
import { Typography, Box, Link } from "@mui/material";
import Grid from "@mui/material/Grid2";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import GitHubIcon from "@mui/icons-material/GitHub";
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
          sx={{ marginBottom: 4 }}
        >
          {HomeText.subTitle}
        </Typography>
        <Grid container spacing={3}>
          {/* Columna izquierda */}
          <Grid
            size={{ xs: 12, sm: 6 }}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: 2,
            }}
          >
            {/* LinkedIn */}
            <Link
              href={HomeText.linkedin}
              target="_blank"
              underline="hover"
              sx={{
                fontSize: "1.2rem",
                display: "flex",
                alignItems: "center",
                gap: 1,
                "&:hover": { color: "#005582" },
              }}
            >
              <LinkedInIcon fontSize="large" />
              <Typography variant="body1" color="text.secondary">
                {HomeText.linkedin}
              </Typography>
            </Link>
            {/* Teléfono */}
            <Link
              href={`tel:${HomeText.phone}`}
              underline="hover"
              sx={{
                fontSize: "1.2rem",
                display: "flex",
                alignItems: "center",
                gap: 1,
                "&:hover": { color: "#2e7d32" },
              }}
            >
              <PhoneIcon fontSize="large" color={"action"} />
              <Typography variant="body1" color="text.secondary">
                {HomeText.phone}
              </Typography>
            </Link>
            {/* GitLab */}
            <Link
              href={HomeText.gitlab}
              target="_blank"
              underline="hover"
              sx={{
                fontSize: "1.2rem",
                display: "flex",
                alignItems: "center",
                gap: 1,
                "&:hover": { color: "#000" },
              }}
            >
              <GitHubIcon fontSize="large" color={"action"} />
              <Typography variant="body1" color="text.secondary">
                {HomeText.gitlab}
              </Typography>
            </Link>
          </Grid>

          {/* Columna derecha */}
          <Grid
            size={{ xs: 12, sm: 6 }}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
              gap: 2,
            }}
          >
            {/* Email */}
            <Link
              href={`mailto:${HomeText.email}`}
              underline="hover"
              sx={{
                fontSize: "1.2rem",
                display: "flex",
                alignItems: "center",
                gap: 1,
                "&:hover": { color: "#b71c1c" },
              }}
            >
              <EmailIcon fontSize="large" color={"action"} />
              <Typography variant="body1" color="text.secondary">
                {HomeText.email}
              </Typography>
            </Link>
            {/* País */}
            <Typography
              variant="body1"
              sx={{
                fontSize: "1.2rem",
                display: "flex",
                alignItems: "center",
                gap: 1,
                color: "#666",
              }}
            >
              <Typography variant="body1" color="text.secondary">
                {HomeText.country}
              </Typography>
            </Typography>
            {/* GitHub */}
            <Link
              href={HomeText.github}
              target="_blank"
              underline="hover"
              sx={{
                fontSize: "1.2rem",
                display: "flex",
                alignItems: "center",
                gap: 1,
                "&:hover": { color: "#000" },
              }}
            >
              <GitHubIcon fontSize="large" color={"action"} />
              <Typography variant="body1" color="text.secondary">
                {HomeText.gitlab}
              </Typography>
            </Link>
          </Grid>
        </Grid>
      </Box>
    </StyleContainer>
  );
};

export default Home;
