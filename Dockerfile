FROM node:22

WORKDIR /app

COPY package.json .
COPY package-lock.json .
COPY server.js .
COPY .env .
COPY images ./images
COPY index.html .


RUN npm install

EXPOSE 3000
CMD ["node", "server.js"]