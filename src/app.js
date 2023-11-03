const http = require('http');

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.statusMessage = "OK";
    res.setHeader = "Content-Type: text/plain";
    res.write('Hello,world!');
    res.end();
});

server.listen(3003, ()=> {
    console.log('Сервер запущен по адресу http://127.0.0.1:3003')
})
