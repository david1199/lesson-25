from node:12.18.1

RUN mkdir -p /app/src/server/

WORKDIR /app/src/server/

COPY . .

RUN yarn

EXPOSE 5000

CMD ["node", "server.js"]