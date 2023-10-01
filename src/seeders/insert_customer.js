// seeders/20230517123456-create-customers.js

'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert('customer', [
            {
                name: 'John Doe',
                password: '123456',
                email: 'johndoe@example.com',
                phone_num: '1234567890',
                address: '123 Main Street',
                avt: 'avatar.jpg',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                name: 'Jane Smith',
                password: 'abcdef',
                email: 'janesmith@example.com',
                phone_num: '0987654321',
                address: '456 Elm Street',
                avt: 'profile.jpg',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            // Thêm các bản ghi khác tại đây
        ]);
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('customer', null, {});
    },
};
