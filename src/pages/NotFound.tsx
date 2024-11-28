// client/src/pages/NotFound.tsx
import React from "react";
import ErrorPage from "../components/ErrorPage"; // Importa el componente base
import { NotFoundText } from "../assets/text/notFound";

const NotFound: React.FC = () => {
  return (
    <ErrorPage
      title={NotFoundText.title}
      message={NotFoundText.message}
    />
  );
};

export default NotFound;
