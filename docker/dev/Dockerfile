FROM node:18-alpine

WORKDIR /usr/src/app

# Copiar solo los archivos necesarios para instalar dependencias
COPY package*.json ./

RUN npm install

# Copiar el resto del proyecto
COPY . .

CMD ["npm", "run", "dev"]

EXPOSE 5173
