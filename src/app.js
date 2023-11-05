const http = require("http");
const getUsers = require("./modules/users");

const server = http.createServer((req, res) => {
  const url = new URL(req.url, "http://127.0.0.1:3003");
  const params = url.searchParams;
  let name = params.get("hello");

  if (params.has("hello")) {
    if (name === "") {
      res.statusCode = 400;
      res.statusMessage = "OK";
      res.setHeader = "Content-Type: text/plain";
      res.write("Enter a name");
      res.end();
    } else {
      res.statusCode = 200;
      res.statusMessage = "OK";
      res.setHeader = "Content-Type: text/plain";
      res.write(`Hello, ${name}`);
      res.end();
    }
  }

  if (req.url === "/?users") {
    res.statusCode = 200;
    res.statusMessage = "OK";
    res.setHeader = "Content-Type: application/json";
    res.write(getUsers());
    res.end();
  } else if (req.url === "/") {
    res.statusCode = 200;
    res.statusMessage = "OK";
    res.setHeader = "Content-Type: text/plain";
    res.write("Hello,world!");
    res.end();
  } else {
    res.statusCode = 500;
    res.statusMessage = "Internal Server Error";
    res.setHeader = "Content-Type: text/plain";
    res.write("");
    res.end();
  }
});

server.listen(3003, () => {
  console.log("Сервер запущен по адресу http://127.0.0.1:3003");
});
