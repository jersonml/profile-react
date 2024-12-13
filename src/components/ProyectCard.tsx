import React from "react";
import {  CardContent, CardMedia,Stack } from "@mui/material";
import { StyledCard, StyledChip, StyledChipContainer, StyledTypographyText, StyledTypographyTitle, StyleEducationSubtitle } from "../assets/styles/components/card";
import { StyledButton } from "../assets/styles/components/generic";
import { proyectText } from "../assets/text/proyect";

// Interfaz para definir el tipo de los props
export interface Project {
  title: string;
  description: string;
  technologies: string[];
  gitlabLink: string;
  image: string;
}

const ProjectCard: React.FC<Project> = ({
  title,
  description,
  technologies,
  gitlabLink,
  image,
}) => {
  return (
    <StyledCard>
      <CardMedia
          component="img"
          height="150"
          image={image}
          alt={`Image for ${title}`}
          style={{
            objectFit: "contain", // Evita distorsiones
            margin: "10px auto", // Centra la imagen
          }}
        />
      <CardContent style={{ flexGrow: 1 }}>
        <StyledTypographyTitle variant="h5" gutterBottom>
          {title}
        </StyledTypographyTitle>
        <StyledTypographyText variant="body2" color="gray">
          {description}
        </StyledTypographyText>
        <StyleEducationSubtitle variant="caption" color="primary">
        {proyectText.subTitle}: 
        </StyleEducationSubtitle>
        <StyledChipContainer>
            {technologies.map((skill, index) => (
              <StyledChip key={index} label={skill} />
            ))}
          </StyledChipContainer>
      </CardContent>
      <Stack direction="row" sx={{ padding: 2 }}>
        <StyledButton
          to=""
          variant="contained"
          href={gitlabLink}
        >
          {proyectText.button}
        </StyledButton>
      </Stack>
    </StyledCard>
  );
};

export default ProjectCard;
