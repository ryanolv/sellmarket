const conn = require('../db/conn');

const ProductSupplier = conn.sequelize.define('fornece', {

});



// If the table has already been created, comment the code below
// Supplier.sync({ force: true })

module.exports = ProductSupplier;