# Use the official Node.js 20 image.
FROM node:20

# Create and change to the app directory.
WORKDIR /usr/src/app

# Copy application dependency manifests to the container image.
COPY package*.json ./

# Install dependencies.
RUN npm install

# Copy local code to the container image.
COPY . .

# Inform Docker that the container listens on the specified port.
EXPOSE 7071

# Run the web service on container startup.
CMD [ "node", "index.js" ]