FROM node:latest

WORKDIR /usr/src/app

COPY . /usr/src/app

RUN apt-get upgrade && apt-get install -y wget

RUN npm install

EXPOSE 3000

CMD ["npm", "run", "dev"]