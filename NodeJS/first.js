const http = require('http');

const server = http.createServer((req, res) => {
    res.end('I AM HERE BAKAA!\n');
});

server.listen(3000, () => {
    console.log('Server is running BAKA!');
});