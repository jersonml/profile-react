FROM node:18-alpine

WORKDIR /app/client

# Copiar solo los archivos necesarios para instalar dependencias
COPY ./client/package*.json ./

RUN npm install

# Copiar el resto del proyecto
COPY ./client ./

CMD ["npm", "run", "dev"]

EXPOSE 5173
