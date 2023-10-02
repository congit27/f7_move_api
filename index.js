require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const http = require('http');
const webSocket = require('./src/util/webSocket');

const app = express();
const port = process.env.PORT || 3000; // Sử dụng PORT từ biến môi trường hoặc mặc định là 3000

const server = http.createServer(app);
webSocket(server);

app.use(morgan('combined'));

app.get('/', (req, res) => {
    res.send('Hello World!');
});

server.listen(port, () => {
    console.log(`WebSocket server listening on port ${port}`);
});
