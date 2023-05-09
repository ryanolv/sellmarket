const Sequelize = require("sequelize");
require('custom-env').env();

const sequelize = new Sequelize('sellmarket', 'root', process.env.PASSWORD_ENV,{
    host: 'localhost',
    dialect: 'mysql'
});

try {
    sequelize.authenticate();
    console.log('Conectou ao mySQL');
} catch (erro) {
    console.log(error)
}
module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}