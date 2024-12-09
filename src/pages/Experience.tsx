import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { timelineElements } from "../assets/text/experience";
import { useTheme } from "@mui/material/styles"; // Para acceder al tema actual
import { Colors } from "../assets/styles/colors";

const ExperienceTimeline: React.FC = () => {
  const theme = useTheme(); // Accede al tema actual

  const isDarkTheme = theme.palette.mode === "dark";

  return (
    <VerticalTimeline>
      {timelineElements.map((element, index) => {
        // Estilos según el tema
        const contentStyle = {
          background: isDarkTheme ? Colors.Transparent : Colors.ButtonColor, // Color de fondo
          color: isDarkTheme ? Colors.ButtonColor : Colors.TextPrimary, // Color de texto
        };

        const contentArrowStyle = {
          borderRight: `7px solid ${
            isDarkTheme ? Colors.LightBlue : Colors.Blue
          }`, // Color de la flecha
        };

        const iconStyle = {
          background: isDarkTheme ? Colors.LightBlue : Colors.Blue, // Color del ícono
          color: Colors.ButtonColor, // Color del ícono
        };

        return (
          <VerticalTimelineElement
            key={index}
            className="vertical-timeline-element--work"
            contentStyle={contentStyle}
            contentArrowStyle={contentArrowStyle}
            date={element.date}
            iconStyle={iconStyle}
          >
            <h3 className="vertical-timeline-element-title">{element.title}</h3>
            <h4 className="vertical-timeline-element-subtitle">
              {element.subtitle}
            </h4>
            <p>{element.description}</p>
          </VerticalTimelineElement>
        );
      })}
    </VerticalTimeline>
  );
};

export default ExperienceTimeline;
