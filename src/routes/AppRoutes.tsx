// client/src/routes/AppRoutes.tsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import { RoutesText } from "../assets/text/routes";
import NotFound from "../pages/NotFound";
import Home from "../pages/Home";
import ExperienceTimeline from "../pages/Experience";
import Course from "../pages/Course";

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path={RoutesText.home.path} element={<Home />} />
      {/* <Route path={RoutesText.about.path} element={<About />} /> */}
      <Route path={RoutesText.notFound.path} element={<NotFound />} />
      <Route
        path={RoutesText.experience.path}
        element={<ExperienceTimeline />}
      />
      <Route path={RoutesText.course.path} element={<Course />} />
    </Routes>
  );
};

export default AppRoutes;
