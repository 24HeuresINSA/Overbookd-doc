FROM node:15.3.0-alpine3.10

WORKDIR /usr/src/doc

RUN npm install -g serve

COPY package*.json ./

RUN npm ci

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["serve","--single","--listen","3000","build"]
