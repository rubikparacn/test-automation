FROM node:slim
WORKDIR /opt/app
COPY . .
RUN npm install

EXPOSE 2000
CMD [ "npm","run", "start:server"]