const conn = require('../db/conn')

const Product = conn.sequelize.define('produto', {
    cod_produto: {
        type: conn.Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false
    },
    valor_produto: {
        type: conn.Sequelize.DECIMAL,
        allowNull: false
    },
    nome_produto: {
        type: conn.Sequelize.STRING,
        allowNull: false
    }
});

// If the table has already been created, comment the code below
// Product.sync({ force: true })

module.exports = Product;