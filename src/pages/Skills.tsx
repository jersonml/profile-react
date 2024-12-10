import React from "react";
import Grid from "@mui/material/Grid2";
import { Typography, Box } from "@mui/material";
import Skill from "../components/Skills";
import { skillsByCategory } from "../assets/text/skills";

const SkillsPage: React.FC = () => {
  return (
    <Box
      sx={{
        padding: 4,
        // backgroundColor: "#0D1B2A",
        minHeight: "100vh",
        // color: "#fff",
        overflowY: "auto",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      {skillsByCategory.map((category) => (
        <Box key={category.category} sx={{ marginBottom: 6 }}>
          <Typography
            variant="h5"
            gutterBottom
            sx={{
              display: "inline-block",
              marginBottom: 3,
            }}
          >
            {category.category}
          </Typography>
          <Grid container spacing={4} paddingLeft={5}>
            {category.skills.map((skill) => (
              <Grid size={{ xs: 2, sm: 2, md: 2 }} key={skill.name}>
                <Skill name={skill.name} value={skill.value} />
              </Grid>
            ))}
          </Grid>
        </Box>
      ))}
    </Box>
  );
};

export default SkillsPage;
