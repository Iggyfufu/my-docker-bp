FROM node:10.5.0 as builder
RUN mkdir /app
WORKDIR /app
COPY ./package.json ./package-lock.json ./public ./src ./
RUN npm install
RUN npm run build

FROM node:10.5.0
RUN mkdir /app
WORKDIR /app
RUN npm install -g serve@9.1.0
COPY --from=builder /app/build ./
EXPOSE 80
CMD server -p 80 -s .