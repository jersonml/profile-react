// client/src/routes/AppRoutes.tsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { RoutesText } from '../assets/text/routes';
import NotFound from '../pages/NotFound';

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      {/* <Route path={RoutesText.home.path} element={<Home />} />
      <Route path={RoutesText.about.path} element={<About />} /> */}
      <Route path={RoutesText.notFound.path} element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;