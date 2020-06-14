# Graphql starter

Server template for project using graphql

## Included Packages

- Apollo Server
- Apollo Server Testing
- Eslint
- Express
- GraphQL Code Generator
- Husky
- Jest
- MongoDB
- Nodemon
- Prettier
- Typescript

## Getting started

### Manual

```bash
# Clone the repository
git clone --depth=1 https://github.com/radchukd/graphql-starter <project_name>

# Install dependencies
cd <project_name> && yarn install

# Configure .env
cp .env.example .env

# Build and run the project
yarn build && yarn start
```

### Docker

```bash
  # Build image
  docker build -t <image_name> .

  # Run image
  docker run -p 3001:3001 <image_id>

```

## Available scripts

In the project directory, you can run:

### `yarn build`

Compiles the app

### `yarn debug`

Runs compiled app in debug mode

### `yarn dev`

Runs uncompiled app in development mode

### `yarn generate`

Generates schema types for typescript

### `yarn lint`

Lints src files

### `yarn lint-fix`

Fixes src files

### `yarn test`

Runs tests

### `yarn type-check`

Checks app for type errors

### `yarn start`

Runs compiled app in production mode
