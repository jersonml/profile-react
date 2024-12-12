import {
  StyledCardExperience,
  StyleEducationTitle,
  StyleEducationSubtitle,
} from "../assets/styles/components/card";
import { Typography } from "@mui/material";
import { School as SchoolIcon } from "@mui/icons-material";
import { StyleContainer } from "../assets/styles/components/home";
import { EducationText } from "../assets/text/education";

const EducationCard = () => {
  return (
    <StyleContainer>
      <StyledCardExperience>
        <SchoolIcon sx={{ color: "#4caf50", fontSize: 40, marginRight: 2 }} />
        <StyleEducationTitle>{EducationText.title}</StyleEducationTitle>

        <StyleEducationSubtitle>
          {EducationText.subtitle}
        </StyleEducationSubtitle>
        <Typography
          variant="body2"
          sx={{
            fontSize: "1rem",
            fontWeight: "bold",
            color: "#ffeb3b",
            marginBottom: 2,
          }}
        >
          {EducationText.date}
        </Typography>
        <Typography
          variant="body1"
          sx={{ color: "#4caf50", fontWeight: "bold" }}
        >
          {EducationText.description}
        </Typography>
      </StyledCardExperience>
    </StyleContainer>
  );
};

export default EducationCard;
