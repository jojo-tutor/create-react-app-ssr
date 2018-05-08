# Using `create-react-app` with React Router + SSR

## Status
On-going

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

Let's create an image named `create-react-app-ssr`:

```sh
docker build -t create-react-app-ssr .
```

Finally, start a container named `create-react-app-ssr-instance` at port `80`.

```sh
docker run -p 80:9000 --name create-react-app-ssr-instance create-react-app-ssr
```

## Testing

```sh
npm test
```
