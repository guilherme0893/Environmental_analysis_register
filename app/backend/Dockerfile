FROM node:18-alpine3.16 as development
WORKDIR /app/backend
COPY package*.json .
RUN npm install
COPY . .
RUN npx prisma generate
RUN npm run build
EXPOSE 8080
FROM node:18-alpine3.16 as production
ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}
WORKDIR /app/backend
COPY package*.json .
EXPOSE 8080
CMD ["node", "/app/backend/dist/src/index.js"]