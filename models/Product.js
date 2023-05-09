const conn = require('../db/conn');
const ProductSupplier = require('./ProductSupplier');
const Supplier = require('./Supplier');

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

Product.belongsToMany(Supplier, {
    through: ProductSupplier,
    foreignKey: 'id_fornecedor',
    constraints: true
});


Supplier.belongsToMany(Product, {
    through: ProductSupplier,
    foreignKey: 'cod_produto',
    constraints: true
});

// If the table has already been created, comment the code below
// Product.sync({ force: true })

module.exports = Product;