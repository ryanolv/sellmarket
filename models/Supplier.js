const conn = require('../db/conn')

const Supplier = conn.sequelize.define('fornecedor', {
    id_fornecedor: {
        type: conn.Sequelize.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    email_fornecedor: {
        type: conn.Sequelize.STRING,
    },
    nome_fornecedor: {
        type: conn.Sequelize.STRING,
        allowNull: false
    },
    cnpj: {
        type: conn.Sequelize.STRING,
        allowNull: false,
        unique: true
    },
});

// If the table has already been created, comment the code below
// Supplier.sync({ force: true })

module.exports = Supplier;