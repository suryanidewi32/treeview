const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("./db.json");
const middlewares = jsonServer.defaults();

server.use(middlewares);

server.use(jsonServer.bodyParser);
server.use((req, res, next) => {
  if (req.method === "POST") {
    req.body.createdAt = new Date().toString();
  }
  // Continue to JSON Server router
  next();
});
server.use((req, res, next) => {
  if (req.method === "PUT") {
    req.body.createdAt = new Date().toString();
  }
  // Continue to JSON Server router
  next();
});

server.use(router);
server.listen(3003, () => {
  console.log("JSON Server is running");
});
