const http = require("http");
const getUsers = require("./modules/users");
const getBooks = require("./modules/books");

const server = http.createServer((req, res) => {
  const url = new URL(req.url, "http://127.0.0.1:3005/");
  const params = url.searchParams;
  let id = params.get("hello");

  if (params.has("hello")) {
    if (id === "") {
      res.statusCode = 400;
      res.statusMessage = "OK";
      res.setHeader = "Content-Type: text/plain";
      res.write("Enter id");
      res.end();
    } else {
      res.statusCode = 200;
      res.statusMessage = "OK";
      res.setHeader = "Content-Type: text/plain";
      res.write(`User books`);
      res.write(getBooks());
      res.end();
    }
  }
  
  if (params.has("book")) {
    res.statusCode = 200;
    res.statusMessage = "OK";
    res.setHeader = "Content-Type: application/json";
    res.write('Книга перемещена');
    res.end();
  }

//   if (req.url === "/?return") {
//     res.statusCode = 200;
//     res.statusMessage = "OK";
//     res.setHeader = "Content-Type: application/json";
//     res.write('Книга возвращена в библиотеку');
//     res.end();
//   } else if (req.url === "/?take") {
//     res.statusCode = 200;
//     res.statusMessage = "OK";
//     res.setHeader = "Content-Type: application/json";
//     res.write('Пользователь взял книгу');
//     res.end();
//   } else 
  
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
  } else if (req.url === "/?catalog") {
    res.statusCode = 200;
    res.statusMessage = "OK";
    res.setHeader = "Content-Type: application/json";
    res.write(getBooks());
    res.end();
  }
  else {
    res.statusCode = 500;
    res.statusMessage = "Internal Server Error";
    res.setHeader = "Content-Type: text/plain";
    res.write("");
    res.end();
  }
});

server.listen(3003, () => {
  console.log("Сервер запущен по адресу http://127.0.0.1:3005/");
});
