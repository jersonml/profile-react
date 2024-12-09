import React from "react";
import { Container, Typography } from "@mui/material";
import CourseList from "../components/CourseList";
import { courses } from "../assets/text/course";


const CoursesPage: React.FC = () => {
  return (
    <Container sx={{ py: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Licenses & Certifications
      </Typography>
      <CourseList courses={courses} />
    </Container>
  );
};

export default CoursesPage;
