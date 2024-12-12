import React from "react";
import { CardContent, CardActions, CardMedia, Link } from "@mui/material";
import {
  StyledCard,
  StyledTypographyTitle,
  StyledTypographyText,
  StyledChipContainer,
  StyledChip,
} from "../assets/styles/components/card";
import { CardText } from "../assets/text/card";
import { StyledButton } from "../assets/styles/components/generic";

interface CourseCardProps {
  title: string;
  platform: string;
  date: string;
  credentialId: string;
  skills: string[];
  link: string;
  image: string;
}

const CourseCard: React.FC<CourseCardProps> = ({
  title,
  platform,
  date,
  credentialId,
  skills,
  link,
  image,
}) => {
  return (
    <Link href={link} target="_blank" rel="noopener noreferrer" underline="none">
      <StyledCard>
        {/* Imagen representativa */}
        <CardMedia
          component="img"
          height="150"
          image={image}
          alt={`Image for ${title}`}
          style={{
            objectFit: "contain", // Evita distorsiones
            margin: "10px auto", // Centra la imagen
            maxHeight: "150px", // Controla el alto máximo
            width: "auto", // Asegura proporciones correctas
          }}
        />
        <CardContent style={{ flexGrow: 1 }}>
          <StyledTypographyTitle>{title}</StyledTypographyTitle>
          <StyledTypographyText>
            <strong>{CardText.platform}:</strong> {platform}
          </StyledTypographyText>
          <StyledTypographyText>
            <strong>{CardText.issued}:</strong> {date}
          </StyledTypographyText>
          <StyledTypographyText>
            <strong>{CardText.crentialId}:</strong> {credentialId}
          </StyledTypographyText>
          <StyledChipContainer>
            {skills.map((skill, index) => (
              <StyledChip key={index} label={skill} />
            ))}
          </StyledChipContainer>
        </CardContent>
        <CardActions>
          <StyledButton size="small" variant="contained" to="">
            {CardText.showCredentials}
          </StyledButton>
        </CardActions>
      </StyledCard>
    </Link>
  );
};

export default CourseCard;
