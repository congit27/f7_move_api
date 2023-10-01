'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('request', {
            id_rq: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            customer_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'customer',
                    key: 'id',
                },
            },
            partner_id: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'partner',
                    key: 'id',
                },
            },
            rq_time: {
                type: Sequelize.DATE,
                defaultValue: Sequelize.NOW,
            },
            vehicle_info: {
                type: Sequelize.STRING(255),
            },
            position: {
                type: Sequelize.STRING(255),
            },
            description: {
                type: Sequelize.TEXT,
            },
            state: {
                type: Sequelize.ENUM(
                    'Chờ xử lý',
                    'Đã nhận yêu cầu',
                    'Đang đến hiện trường',
                    'Đã giải quyết',
                    'Từ chối yêu cầu',
                ),
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
                defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE,
                defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
            },
        });
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('request');
    },
};
