FROM node:10.5.0

RUN mkdir /app
WORKDIR /app

COPY ./package.json ./package-lock.json ./.babelrc ./
RUN npm install

EXPOSE 3001
CMD npm start
