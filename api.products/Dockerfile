# Use the official Node LTS image
FROM node:18

# Set the working directory
WORKDIR /api.products

# Copy the package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy the rest of the files
COPY . .

# Expose the port
EXPOSE 5002

# Start the server
CMD [ "npm", "start" ]
