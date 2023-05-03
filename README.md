# Vblog-Site
Butterfly and Bee blog site. Hosting video talks and random discussions. Random guests to appear as well. 

## Prerequisites

- Docker
- React
- Node.js
- HTML
- Tailwind
- Vite

## Steps

1. Create a new React project with `npx create-react-app my-app`.

2. In the project root folder, create a `Dockerfile` and add the following code:

```dockerfile
# Use an official Node.js runtime as a parent image
FROM node:current-slim

# Set the working directory to /app
WORKDIR /app

# Copy the current directory contents into the container at /app
COPY . /app

# Install any needed packages
RUN npm install

# Make port 3000 available to the world outside this container
EXPOSE 3000

# Run the app when the container launches
CMD ["npm", "start"]
```

3. Build the Docker image with the following command: `docker build -t my-react-app .`

4. Run the Docker container with the following command: `docker run -p 3000:3000 my-react-app`.

5. Open a web browser and navigate to `http://localhost:3000` to view the React website.

## Conclusion

This guide has shown how to deploy a React website using Docker. By following these steps, you can easily deploy your React website using Docker and share it with others.