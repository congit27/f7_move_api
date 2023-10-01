// notification.js

const axios = require('axios');

const EXPO_SERVER_URL = 'https://api.expo.dev/v2/push/send'

const sendPushNotification = async (token, title, body) => {
    const message = {
        to: token,
        sound: 'default',
        title,
        body
    }

    await axios.post(EXPO_SERVER_URL, message)
}

module.exports = sendPushNotification;
