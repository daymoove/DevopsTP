FROM node:14
RUN usermod -d /home/appi -l appi node
WORKDIR /app
RUN npm install
COPY . .
RUN npm run build
USER appi
EXPOSE 8080
CMD ["npm", "start"]