FROM node:14-alpine

WORKDIR /app

COPY package.json .

RUN npm install
RUN npm install sequelize-cli --save

COPY . .

CMD npm start