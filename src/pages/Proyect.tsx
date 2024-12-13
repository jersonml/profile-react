import React from "react";
import { Box, Typography } from "@mui/material";
import ProjectCard from "../components/ProyectCard";
import Grid from "@mui/material/Grid2";
import { projects } from "../assets/text/proyect";

const ProjectsPage: React.FC = () => {
  return (
    <Box
      sx={{
        padding: 3,
        bgcolor: "linear-gradient(135deg, #2a5298, #1e3c72)",
        // minHeight: "100vh",
      }}
    >
      <Typography variant="h3" align="center" color="white" gutterBottom>
        Mis Proyectos
      </Typography>
      <Grid container  justifyContent="center">
        {projects.map((project, index) => (
          <Grid size={{ xs: 12, sm: 6, md: 2 }} key={index}>
            <ProjectCard {...project} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ProjectsPage;
