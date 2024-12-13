import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { timelineElements } from "../assets/text/experience";
import { useTheme } from "@mui/material/styles"; // Para acceder al tema actual
import { Button } from "@mui/material"; // Botón de Material-UI
import { Colors } from "../assets/styles/colors";

const ExperienceTimeline: React.FC = () => {
  const theme = useTheme(); // Accede al tema actual
  const isDarkTheme = theme.palette.mode === "dark";

  return (
    <VerticalTimeline>
      {timelineElements.map((element, index) => {
        // Estilos según el tema
        const contentStyle = {
          background: isDarkTheme ? Colors.Transparent : Colors.ButtonColor,
          color: isDarkTheme ? Colors.ButtonColor : Colors.TextPrimary,
        };

        const contentArrowStyle = {
          borderRight: `7px solid ${
            isDarkTheme ? Colors.LightBlue : Colors.Blue
          }`,
        };

        const iconStyle = {
          background: isDarkTheme ? Colors.LightBlue : Colors.Blue,
          color: Colors.ButtonColor,
        };

        return (
          <VerticalTimelineElement
            key={index}
            className="vertical-timeline-element--work"
            contentStyle={contentStyle}
            contentArrowStyle={contentArrowStyle}
            date={element.date}
            iconStyle={iconStyle}
            icon={
              <img
                src={element.icon} // Imagen personalizada para el ícono
                alt={element.title}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "50%", // Asegura que la imagen sea redonda
                }}
              />
            }
          >
            {/* Título y subtítulo */}
            <h3 className="vertical-timeline-element-title">{element.title}</h3>
            <h4 className="vertical-timeline-element-subtitle">
              {element.subtitle}
            </h4>

            {/* Descripción */}
            <p>{element.description}</p>

            {/* Imagen (opcional) */}
            {element.image && (
              <div style={{ textAlign: "center", marginTop: "1rem" }}>
                <img
                  src={element.image}
                  alt={element.title}
                  style={{ maxWidth: "100%", borderRadius: "8px" }}
                />
              </div>
            )}

            {/* Botón de redirección (opcional) */}
            {element.link && (
              <div style={{ textAlign: "center", marginTop: "1rem" }}>
                <Button
                  variant="contained"
                  color="primary"
                  href={element.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{ textTransform: "none" }} // Evita que el texto del botón esté en mayúsculas
                >
                  Ver más
                </Button>
              </div>
            )}
          </VerticalTimelineElement>
        );
      })}
    </VerticalTimeline>
  );
};

export default ExperienceTimeline;
