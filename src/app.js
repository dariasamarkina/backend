const http = require('http');
const getUsers = require('./modules/users');

const server = http.createServer((req, res) => {
    if(req.url === '/users') {
        res.statusCode = 200;
        res.statusMessage = "OK";
        res.setHeader = "Content-Type: application/json";
        res.write(getUsers());
        res.end();
    }

    res.statusCode = 200;
    res.statusMessage = "OK";
    res.setHeader = "Content-Type: text/plain";
    res.write('Hello,world!');
    res.end();
});

server.listen(3003, ()=> {
    console.log('Сервер запущен по адресу http://127.0.0.1:3003')
})
