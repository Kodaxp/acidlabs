FROM node:14.21.2-alpine3.16

WORKDIR /app

COPY package*.json .

RUN npm i

COPY . .

RUN npm run build

CMD [ "node", "./dist/main.js" ]
