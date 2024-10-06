# Use an official Node.js runtime as a base image
FROM node:18-alpine as builder
LABEL staging as app_builder

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install project dependencies
RUN yarn

# Copy the rest of the application code to the container
COPY . .

# Build your Next.js project
RUN yarn build

# Expose the port that Next.js uses (default is 3000)
EXPOSE 3005

# Start the Next.js application
CMD ["yarn", "serve"]

# CMD ["serve", "-s", "-l", "3000", "next"]
