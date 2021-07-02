FROM mhart/alpine-node:14
WORKDIR /app
COPY package*.json ./ 
COPY package-lock.json ./
RUN npm ci
COPY . .
RUN npm run build
RUN rm -rf ./src
EXPOSE 4500
CMD [ "node", "./build/src/index.js" ]