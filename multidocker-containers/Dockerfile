FROM node:alpine

WORKDIR /var/nodeapp

COPY ./package.json ./

RUN npm install

COPY . . 

CMD ["npm" , "start"]