const conn = require('../db/conn')

const Supplier = conn.sequelize.define('fornecedor', {
    id_fornecedor: {
        type: conn.Sequelize.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    email_fornecedor: {
        type: conn.Sequelize.INTEGER,
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

module.exports = Supplier;