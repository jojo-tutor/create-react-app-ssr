# Using `create-react-app` with React Router + Express.js

**:warning: This is outdated, please refer to the official and new [react-router docs](https://reacttraining.com/react-router/)**

## Development

Install dependencies:

```sh
npm install
```

Start the project at [`http://localhost:3000`](http://localhost:3000).

```sh
npm start
```

## Running with Docker

Be sure to install Docker and start a Docker-machine if necessary.

Let's create an image named `create-react-app-with-express-server`:

```sh
docker build -t create-react-app-with-express-server .
```

Finally, start a container named `create-react-app-with-express-server-instance` at port `80`.

```sh
docker run -p 80:9000 --name create-react-app-with-express-server-instance create-react-app-with-express-server
```

## Testing

```sh
npm test
```
