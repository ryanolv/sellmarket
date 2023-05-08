const conn = require('../db/conn')

const Provider = conn.sequelize.define('produto', {
    id_fornecedor: {
        type: conn.Sequelize.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    email_fornecedor: {
        type: conn.Sequelize.INTEGER,
        allowNull: false
    },
    nome_fornecedor: {
        type: conn.Sequelize.STRING,
        allowNull: false
    },
    cnpj: {
        type: conn.Sequelize.STRING,
        allowNull: false
    },
});

// User.sync({ force: true })

module.exports = Provider;