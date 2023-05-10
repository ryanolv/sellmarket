const conn = require('../db/conn');

const ProductSupplier = conn.sequelize.define('fornece', {

}, 
{
    freezeTableName: true, // Model tableName will be the same as the model name
}
);


module.exports = ProductSupplier;