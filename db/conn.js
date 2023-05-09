const Sequelize = require("sequelize");
require('custom-env').env();

const sequelize = new Sequelize('sellmarket', 'root', process.env.PASSWORD_ENV,{
    host: 'localhost',
    dialect: 'mysql'
});

sequelize.authenticate()
    .then(_ => console.log('Conectou ao mySQL'))
    .catch( err => console.log('Não conectou\n', err))

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}