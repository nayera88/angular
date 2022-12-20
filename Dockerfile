FROM node:latest as build

WORKDIR /usr/local/app

COPY ./ /usr/local/app/

RUN npm install -g @angular/cli
RUN npm install

RUN npm run build --prod

FROM nginxinc/nginx-unprivileged
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /usr/local/app/dist/demo /usr/share/nginx/html

EXPOSE 80