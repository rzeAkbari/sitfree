FROM node
WORKDIR /app

COPY package.json package-lock.json /
RUN npm ci

COPY . .

RUN npm run build

CMD ["node" , "server/server.ts" ]