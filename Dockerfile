FROM node:20.12.2-slim as build

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY . .

RUN yarn --frozen-lockfile
RUN yarn build

FROM fitiavana07/nginx-react
COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80/tcp

CMD ["nginx", "-g", "daemon off;"]