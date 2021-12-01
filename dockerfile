FROM node:12.19.0-alpine3.9

WORKDIR /usr/src/app

COPY package*.json ./

RUN yarn install --only=development

RUN yarn prebuild

COPY . .

EXPOSE 3000

CMD ["yarn", "start:dev"]