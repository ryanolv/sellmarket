const Sequelize = require("sequelize");
require('custom-env').env();

const sequelize = new Sequelize('sellmarket', 'root', process.env.PASSWORD_ENV,{
    host: 'localhost',
    dialect: 'mysql'
});


module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}