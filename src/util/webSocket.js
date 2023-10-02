const socketIo = require('socket.io');
const sendPushNotification = require('./pushNotifications');

let io; // Biến lưu trữ instance của socket.io

function webSocket(server) {
    io = socketIo(server);

    let expoPushToken = null;
    let receiveRequestsEnabled = true;

    io.on('connection', (socket) => {
        console.log('A new client connected');

        socket.on('rescue-request', (data) => {
            console.log(receiveRequestsEnabled);
            if (receiveRequestsEnabled) {
                console.log(data);
                sendPushNotification(expoPushToken, 'Yêu cầu cứu hộ mới !', data.message);
                io.emit('new-rescue-request', data);
            }
        });

        socket.on('send-expo-push-token', (data) => {
            console.log(data);
            receiveRequestsEnabled = true;
            expoPushToken = data.token;
        });

        socket.on('disconnect', () => {
            console.log('A client disconnected');
        });

        socket.on('close-connect', () => {
            console.log('Trạng thái đóng');
            receiveRequestsEnabled = false;
        });
    });
}

module.exports = webSocket;
