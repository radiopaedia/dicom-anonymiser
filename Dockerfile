FROM node
WORKDIR /usr/src/app
RUN npm install -g yarn
COPY package.json ./
COPY yarn.lock ./
RUN yarn install

COPY . .

RUN yarn build

EXPOSE 8080
CMD [ "node", "server.js" ]
