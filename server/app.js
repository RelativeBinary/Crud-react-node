const http = require('http'); // to use require you need npm install @types/node --save-dev

const hostname = '127.0.0.1';
const port = 3001; //webui already uses 3000 locally

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World');
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});