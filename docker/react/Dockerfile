# Build
FROM node:23-alpine AS builder

WORKDIR /app

COPY ./front .

RUN npm install && npm run build

# Run
FROM node:23-alpine

WORKDIR /app

COPY --from=builder /app ./

EXPOSE 3000

CMD ["npm", "start"]