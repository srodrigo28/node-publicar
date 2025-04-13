FROM node:19-alpine3.15

COPY package.json /app/

COPY src /app/

WORKDIR /app/

RUN npm install

CMD ["node", "server.js"]

EXPOSE 3000

# docker build -t node-app ./

# rodar o docker
# docker run -d -p 3000:3000 node-app

3/7 muda o diretório de trabalho do container
6/7 docker run -p 3000:3000
7/7 a aplicação e suas dependências