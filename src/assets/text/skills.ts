
interface SkillType {
    name: string;
    value: number;
  }
  

interface SkillCategory {
    category: string;
    skills: SkillType[];
  }

export const skillsByCategory: SkillCategory[] = [
  {
    category: "Idiomas",
    skills: [
      { name: "Español", value: 100 },
      { name: "Ingles", value: 10 },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Python", value: 70 },
      { name: "Node.js", value: 50 },
      { name: "Express.js", value: 60 },
      { name: "FastAPI", value: 20 },
      { name: "Flask", value: 50 },
      { name: "Django Rest Framework", value:80 },
      { name: "Serveless Framework", value:40 },
      { name: "Spring Boot", value: 20 },
      { name: "Java", value: 10 },
      { name: "Redis", value: 60 },

    ],
  },
  {
    category: "Frontend",
    skills: [
      { name: "React", value: 20 },
      { name: "React Native", value: 5 },
      { name: "TypeScript", value: 20 },
      { name: "JavaScript", value: 30 },
      { name: "HTML & CSS", value: 15 },
    ],
  },
  {
    category: "DevOps",
    skills: [
      { name: "AWS", value: 60 },
      { name: "GPC", value: 30 },
      { name: "Docker", value: 50 },
      { name: "CI/CD", value: 60 },
      { name: "Git", value: 75 },
      { name: "Azure Functions", value: 60 },
      { name: "Azure Durable orchestrations", value: 40 },
      { name: "Azure Blob Storage", value: 50 },
      { name: "Azure Table", value: 50 },
      { name: "Amazon EC2", value: 70 },
      { name: "Amazon S3", value: 80 },
      { name: "Amazon Rekognition", value: 65 },
      { name: "Amazon Glue", value: 30 },
      { name: "Amazon RDS", value: 60 },
      { name: "Amazon Event Bridge", value: 50 },
      { name: "Amazon MediaConvert", value: 65 },
      { name: "Amazon SES", value: 70 },
      { name: "Amazon CDN", value: 65 },
      { name: "Amazon EKS", value: 30 },
      { name: "Amazon Elasticache", value: 60 },
      { name: "Amazon Lambdas", value: 80 },
      { name: "Amazon Step Functions", value: 60 },
    ],
  },
  {
    category: "Bases de Datos",
    skills: [
      { name: "MariaDB", value: 30 },
      { name: "MySQL", value: 40 },
      { name: "PostgreSQL", value: 80 },
      { name: "MongoDB", value: 50 },
    ],
  },
  {
    category: "Otros",
    skills: [
      { name: "Pytest", value: 60 },
      { name: "PyQt", value: 40 },
      { name: "ORM", value: 70 },
      { name: "REST Api", value: 80 },
      { name: "C++", value: 20 },
      { name: "SQLAlchemy", value: 30 },
      { name: "Microservicios", value: 60 },
      { name: "IoT", value: 30 },
      { name: "Integración de pagos", value: 70 },
      { name: "Celery", value: 65 },
      { name: "WebSocket", value: 60 },
      { name: "Swagger", value: 80 },
      { name: "Postman", value: 80 },
      { name: "Firebase", value: 65 },
      { name: "Liderazgo de Backend", value: 30 },
      { name: "Buenas prácticas", value: 85 },
      { name: "Planeación de equipo", value: 80 },
      { name: "Disciplina", value: 90 },
      { name: "Eficacia", value: 85 },
      { name: "Resolución de desafíos", value: 85 },
      { name: "Aprendizaje rápido", value: 90 },
      { name: "Autonomía", value: 85 },
      { name: "Responsabilidad", value: 90 },
      { name: "Trabajo en equipo", value: 85 },
    ],
  },
];
