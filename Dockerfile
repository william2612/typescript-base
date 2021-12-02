FROM node:14
WORKDIR /app
COPY ./src ./src
COPY ./tsconfig-build.json .
COPY ./tsconfig.json .
COPY ./package.json .
RUN npm install
RUN npm run build-docker
EXPOSE 8000
RUN chown -R node /app
USER node
CMD ["npm", "start"]