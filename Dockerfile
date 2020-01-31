# Stage 0, based on Node.js, to build and compile Angular
FROM node:10.4.1-alpine as node
RUN apk add --no-cache git
WORKDIR /app
COPY package*.json /app/
RUN npm install
COPY ./ /app/
RUN npm run build

# Stage 1, based on Nginx, to have only the compiled app, ready for production with Nginx
FROM nginx:1.14.0-alpine
COPY --from=node /app/build/ /usr/share/nginx/html
COPY ./nginx_new.conf /etc/nginx/conf.d/default.conf