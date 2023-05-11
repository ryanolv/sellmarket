const { DataTypes } = require('sequelize');
const conn = require('../db/conn');

const ProductSupplier = conn.sequelize.define('fornece', {
    valor_fornecedor: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
    }
}, 
{   
    timestamp: false,
    freezeTableName: true, // Model tableName will be the same as the model name
}
);


module.exports = ProductSupplier;