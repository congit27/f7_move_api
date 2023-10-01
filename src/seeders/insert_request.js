'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert('request', [
            {
                customer_id: 1,
                partner_id: null,
                vehicle_info: 'Xe A',
                description: 'Xe chết máy',
                state: 'Chờ xử lý',
                position: 'Hải Châu',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                customer_id: 2,
                partner_id: 2,
                vehicle_info: 'Xe B',
                description: 'Lủng bánh',
                position: 'Thanh Khê',
                state: 'Đã nhận yêu cầu',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            // Thêm các dữ liệu yêu cầu khác tại đây (nếu cần)
        ]);
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('request', null, {});
    },
};
