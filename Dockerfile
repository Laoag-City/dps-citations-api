# Use a minimal Node.js base image
FROM node:20.14.0-alpine

# Create a working directory
WORKDIR /app

# Copy your package.json and yarn.lock file
COPY package.json yarn.lock ./

# Install dependencies using Yarn
RUN yarn

# Copy your application code
COPY . .

# Expose the port your app listens on (usually 3000)
EXPOSE 3002

# Set the start command
CMD ["yarn", "start"]
