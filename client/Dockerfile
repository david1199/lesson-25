from node:12.18.1

RUN mkdir -p /app/src/client/

WORKDIR /app/src/client/

COPY . .

RUN yarn

EXPOSE 3000

CMD ["yarn", "start"]