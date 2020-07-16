FROM node

EXPOSE 3000

WORKDIR /usr/src/app

ADD . .

RUN npm install

CMD [ "node", "app.js" ]
