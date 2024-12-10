import React from "react";
import {
  StyledSkillTitle,
  StyledSlider,
} from "../assets/styles/components/skill";
import { Box } from "@mui/material";

interface SkillProps {
  name: string;
  value: number;
}

const Skill: React.FC<SkillProps> = ({ name, value }) => {
  return (
    <Box sx={{ m: 1 }}>
      <StyledSkillTitle gutterBottom>{name}</StyledSkillTitle>
      <StyledSlider
        valueLabelDisplay="auto"
        aria-label="pretto slider"
        defaultValue={value}
      />
    </Box>
  );
};

export default Skill;
