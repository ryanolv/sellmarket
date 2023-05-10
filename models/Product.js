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
    through: {
        model: ProductSupplier
    },
    foreignKey: 'id_fornecedor',
    constraints: true
});


Supplier.belongsToMany(Product, {
    through: {
        model: ProductSupplier
    },
    foreignKey: 'cod_produto',
    constraints: true
});


module.exports = Product;