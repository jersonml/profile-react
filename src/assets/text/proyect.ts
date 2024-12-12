import { Project } from "../../components/ProyectCard";
import Auction from "../images/auction.webp";

export const projects: Project[] = [
    {
      title: "Subastas",
      description: "es una aplicación de subastas en línea desarrollada con Django, basada en la plantilla cookiecutter-django. El proyecto está completamente containerizado utilizando Docker y emplea una arquitectura distribuida con repositorios separados por aplicación para facilitar la escalabilidad y la administración de bases de datos.",
      technologies: ["Python","Django REST framework", "postgresql", "Redis", "Celery", "Flower","Docker", "Swagger Docs"],
      gitlabLink: "https://gitlab.com/test1261843/django-auctions",
      image: Auction, // Reemplaza con una imagen representativa
    }
  ];

export const proyectText = {
    button: "Ver en GitLab",
    subTitle: "Tecnologías",

}