FROM node:alpine

ENV HOME=/usr/app

RUN mkdir -p $HOME
WORKDIR $HOME

COPY package*.json .
RUN yarn install

COPY . ./
EXPOSE 3000

CMD ["yarn", "start"]