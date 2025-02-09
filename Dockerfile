FROM node:18-alpine as base
WORKDIR /app

FROM node:18 as dev
WORKDIR /app
COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]

FROM base as prod
COPY package*.json ./
RUN npm install
COPY . .
RUN mkdir -p dist && npm run build