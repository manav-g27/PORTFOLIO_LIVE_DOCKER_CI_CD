# Use an official Node.js image to build the app
FROM node:18 AS build

WORKDIR /app

# Copy dependencies first (for better caching)
COPY package*.json ./

RUN npm install

# Copy the rest of the project files
COPY . .

# Build the production-ready app
RUN npm run build

# Use a lightweight web server to serve the app
FROM nginx:alpine

# Copy build output to nginx web directory
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start nginx server
CMD ["nginx", "-g", "daemon off;"]
