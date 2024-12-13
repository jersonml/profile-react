import React from "react";
import Grid from "@mui/material/Grid2";
import CourseCard from "../components/CourseCard";

interface Course {
  title: string;
  platform: string;
  date: string;
  credentialId: string;
  skills: string[];
  link: string;
  image: string;
}

interface CourseListProps {
  courses: Course[];
}

const CourseList: React.FC<CourseListProps> = ({ courses }) => {
  return (
    <Grid
      container
      spacing={6}
      sx={{
        padding: 1,
        justifyContent: "center",
      }}
    >
      {courses.map((course, index) => (
        <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
          <CourseCard {...course} />
        </Grid>
      ))}
    </Grid>
  );
};

export default CourseList;
