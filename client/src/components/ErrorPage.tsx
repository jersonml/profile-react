// client/src/pages/ErrorPage.tsx
import React from "react";
import { Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

import Layout from "./Layout"; // Importa el Layout
import { StyledContainer } from "../assets/styles/components/errorPage";
import { RoutesText } from "../assets/text/routes";
import { Colors } from "../assets/styles/colors";

const ErrorPage: React.FC<{ title: string; message: string }> = ({
  title,
  message,
}) => {
  return (
    <Layout>
      <StyledContainer>
        <Typography variant="h2" component="h1" gutterBottom>
          {title}
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom>
          {message}
        </Typography>
        <Button
          sx={{ color: Colors.ButtonColor }}
          component={Link}
          to={RoutesText.about.path}
        >
          {RoutesText.about.label}
        </Button>
      </StyledContainer>
    </Layout>
  );
};

export default ErrorPage;
