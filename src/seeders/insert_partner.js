// seeders/20230517124567-create-partners.js

'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert('partner', [
            {
                name: 'ABC Company',
                phone_num: '1234567890',
                address: '123 Main Street',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                name: 'XYZ Corporation',
                phone_num: '0987654321',
                address: '456 Elm Street',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            // Thêm các bản ghi khác tại đây
        ]);
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('partner', null, {});
    },
};
