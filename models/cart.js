const Sequelize = require('sequelize').Sequelize;
const sequelize = require('../util/database');
  
const Cart = sequelize.define('Cart',{
  id:{
    allowNull:false,
    autoIncrement:true,
    primaryKey:true,
    type:Sequelize.INTEGER,
  }
});

module.exports = Cart;