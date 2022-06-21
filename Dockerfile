FROM node:12-alpine

WORKDIR /src/app

COPY . /src/app

RUN npm install

EXPOSE 4242

CMD ["node", "src/server.js"]