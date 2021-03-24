const Sequelize = require('sequelize').Sequelize;

const sequelize = new Sequelize('node-complete', 'root', 'shady0909', {
    dialect: 'mysql',
    host: 'localhost',
});

module.exports = sequelize;