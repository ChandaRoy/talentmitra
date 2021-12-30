
#STAGE 1
FROM node:16.13.0 as build-step
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build --prod
 
EXPOSE 8080
CMD [ "node", "./bin/www" ]