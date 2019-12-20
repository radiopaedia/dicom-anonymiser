FROM node
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install --include-dev

COPY . .

RUN npm build

EXPOSE 8080
CMD [ "node", "server.js" ]
