FROM node:18 as builder

WORKDIR /app
COPY ./package.json .
COPY ./yarn.lock .
RUN yarn

COPY . .
RUN yarn build

FROM nginx:alpine
# COPY ./nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/site  /usr/share/nginx/html
EXPOSE 80