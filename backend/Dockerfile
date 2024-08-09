FROM node:20-alpine
WORKDIR /app
COPY package.json ./
COPY package-lock.json ./
RUN npm install
RUN npm install --save-dev nodemon
COPY . .
EXPOSE 5000
CMD ["npm", "run", "dev" ]
