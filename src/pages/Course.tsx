import React from "react";
import { Container, Typography } from "@mui/material";
import CourseList from "../components/CourseList";
import { courses, couseText, education } from "../assets/text/course";

const CoursesPage: React.FC = () => {
  return (
    <Container
      sx={{
        py: 4,
        textAlign: "center",
      }}
    >
      <Typography variant="h4" component="h1" gutterBottom>
        {couseText.education}
      </Typography>
      <CourseList courses={education} />

      <Typography variant="h4" component="h1" gutterBottom sx={{margin:3}}>
        {couseText.course}
      </Typography>
      <CourseList courses={courses} />
    </Container>
  );
};

export default CoursesPage;
