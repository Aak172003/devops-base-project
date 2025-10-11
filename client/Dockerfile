# This will goona start linux os operation system where nodejs will be pre-installed
FROM node:20-alpine

# This will create a directory in the container and will be used to store the application code
# This is inside container and not in host machine
WORKDIR /app

COPY package*json ./
# This will copy the package.json and package-lock.json files to the container

RUN npm install
# This will install the dependencies for the application

# This will copy the rest of the application code to the container
COPY . .

RUN npm run build

EXPOSE 5173

CMD ["npm", "run", "preview"]
