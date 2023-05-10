const Sequelize = require("sequelize");
require('custom-env').env();

const sequelize = new Sequelize(process.env.DATABASE_ENV, process.env.USER_ENV, process.env.PASSWORD_ENV,{
    host: process.env.HOST_ENV,
    dialect: 'mysql'
});

sequelize.authenticate()
    .then(_ => console.log('Connected to mySQL'))
    .catch( err => console.log("Did not connect to mySQL", err));


// To use when you'll update anything
// sequelize.sync();

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}