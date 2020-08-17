FROM node:12

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

WORKDIR /home/node/app

COPY package*.json ./

RUN npm ci

COPY . .

USER node

EXPOSE 8081

CMD ["node", "build/app.js"]
