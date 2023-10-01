require('dotenv').config();

const express = require('express');
const morgan = require('morgan');
const http = require('http');
const socketIo = require('socket.io');
const  sendPushNotification = require('./src/util/pushNotifications');

const app = express();
const port = process.env.PORT || 3000; // Sử dụng PORT từ biến môi trường hoặc mặc định là 3000

const server = http.createServer(app);
const io = socketIo(server);

app.use(morgan('combined'));

app.get('/', (req, res) => {
    res.send('Hello World!');
});

let expoPushToken = null
let v  = true

// Khi có kết nối mới từ một client
io.on('connection', (socket) => {
    console.log('A new client connected');

    // Lắng nghe sự kiện khi khách hàng gửi yêu cầu cứu hộ
    socket.on('rescue-request', (data) => {
        console.log(data);
        if (receiveRequestsEnabled) {
            io.emit('new-rescue-request', data); // Phát yêu cầu cứu hộ chỉ khi trạng thái nhận yêu cầu là bật
            sendPushNotification(expoPushToken, 'Yêu cầu cứu hộ mới !', data.message)
            console.log(expoPushToken);
        } 
    });

    // Lắng nghe sự kiện gửi expo push notification token từ thiết bị của đối tác 
    socket.on('send-expo-push-token', (data) => {
        console.log(data);
        receiveRequestsEnabled = true 
        expoPushToken = data.token
    });

    // Khi client ngắt kết nối
    socket.on('disconnect', () => {
        console.log('A client disconnected');
    });

    // Ngắt kết nối đối tác 
    socket.on('close-connect', () => {
        console.log('trạng thái đóng')
        receiveRequestsEnabled = false 
    })
});


server.listen(port, () => {
    console.log(`WebSocket server listening on port ${port}`);
});
