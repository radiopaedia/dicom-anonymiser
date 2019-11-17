FROM node
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm update & npm install & npm install express

# RUN npm ci --only=production

COPY . .
EXPOSE 8080
CMD [ "node", "server.js" ]
