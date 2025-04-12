FROM node:19-alpine3.15

COPY package.json /app/

COPY src /app/

WORKDIR /app/

RUN npm install

CMD ["node", "server.js"]

# docker build -t node-app ./