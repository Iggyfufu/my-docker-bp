FROM node:10.5.0

RUN mkdir /app
WORKDIR /app

COPY ./package.json ./package-lock.json ./
RUN npm install

EXPOSE 3000
CMD npm start