// client/src/routes/AppRoutes.tsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import { RoutesText } from "../assets/text/routes";
import NotFound from "../pages/NotFound";
import Home from "../pages/Home";
import ExperienceTimeline from "../pages/Experience";
import Course from "../pages/Course";
import SkillsPage from "../pages/Skills";
import ProjectsPage from "../pages/Proyect";

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path={RoutesText.home.path} element={<Home />} />
      <Route path={RoutesText.notFound.path} element={<NotFound />} />
      <Route
        path={RoutesText.experience.path}
        element={<ExperienceTimeline />}
      />
      <Route path={RoutesText.course.path} element={<Course />} />
      <Route path={RoutesText.skills.path} element={<SkillsPage />} />
      <Route path={RoutesText.proyect.path} element={<ProjectsPage />} />
    </Routes>
  );
};

export default AppRoutes;
