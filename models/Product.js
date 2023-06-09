const { DataTypes } = require('sequelize');
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
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
    },
    nome_produto: {
        type: conn.Sequelize.STRING,
        allowNull: false
    }
}, 
    {
        timestamp: false,
        freezeTableName: true, // Model tableName will be the same as the model name
    }
);


Product.belongsToMany(Supplier, {
    through: ProductSupplier,
    foreignKey: 'cod_produto',
    otherKey: 'id_fornecedor'
});

Supplier.belongsToMany(Product, {
    through: ProductSupplier,
    foreignKey: 'id_fornecedor',
    otherKey: 'cod_produto'
});


module.exports = Product;