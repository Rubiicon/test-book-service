FROM node:14

WORKDIR /urs/src/app

COPY package*.json ./

RUN npm install

COPY . .

ARG NODE_ENV=production

ENV NODE_ENV=${NODE_ENV}

EXPOSE 3000

RUN npm run build

CMD [ "npm", "start" ]