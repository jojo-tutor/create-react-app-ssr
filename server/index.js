var fs = require('fs');
const path = require('path')
const jsonServer = require('json-server')
const server = jsonServer.create()
const customer = require('./customer')
const middlewares = jsonServer.defaults()

const config = {
  port: 4000,
  dbFile: 'db.json'
}

const generateFaker = JSON.stringify(customer())

fs.writeFileSync(path.join(__dirname, config.dbFile), generateFaker, function (err) {
  if (err) throw err;
  console.log('Faker file generated.');
})

const router = jsonServer.router(path.join(__dirname, 'db.json'))
server.use(middlewares)
server.use(router)
server.listen(config.port, () => {
  console.log(`JSON Server is running on PORT ${config.port}`)
})
