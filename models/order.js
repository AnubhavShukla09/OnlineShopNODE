const Sequelize = require('sequelize').Sequelize;
const sequelize = require('../util/database');
  
const Order = sequelize.define('Order',{
  id:{
    allowNull:false,
    autoIncrement:true,
    primaryKey:true,
    type:Sequelize.INTEGER,
  }
});

module.exports = Order;