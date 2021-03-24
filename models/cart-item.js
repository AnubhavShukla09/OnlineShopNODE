const Sequelize = require('sequelize').Sequelize;
const sequelize = require('../util/database');
  
const CartItem = sequelize.define('CartItem',{
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

module.exports = CartItem;