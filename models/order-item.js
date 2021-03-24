const Sequelize = require('sequelize').Sequelize;
const sequelize = require('../util/database');
  
const OrderItem = sequelize.define('OrderItem',{
  id:{
    allowNull:false,
    autoIncrement:true,
    primaryKey:true,
    type:Sequelize.INTEGER,
  },
  quantity:{
    type:Sequelize.INTEGER,
  }
});

module.exports = OrderItem;