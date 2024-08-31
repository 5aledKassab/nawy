# Use Node.js base image
FROM node:18

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json ./
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port the API will run on
EXPOSE 8080

# Command to run the API
CMD ["bash", "-c", "node Seeders/apartmentsSeeder.js && node server.js"]