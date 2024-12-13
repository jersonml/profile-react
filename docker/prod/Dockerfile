FROM node:18-alpine as builder

WORKDIR /app/client

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

FROM nginx:alpine

WORKDIR /usr/share/nginx

RUN rm -rf html
COPY --from=builder /app/client/dist html

COPY ./nginx/nginx.conf /etc/nginx/nginx.conf

EXPOSE 8080

ENTRYPOINT ["nginx", "-g", "daemon off;"]
