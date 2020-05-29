'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("users", {
      id:{
        type: Sequelize.INTEGER,
         primaryKey:true,
         autoIncrement:true,
         AllowNull:false,
      },
      name:{
        type:Sequelize.STRING,
        AllowNull:false
      },
      email:{
        type:Sequelize.STRING,
        unique:true,
        AllowNull:false,
      },
      password_hash:{
        type:Sequelize.STRING,
        AllowNull:false
      },
      
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("users")
  }
};
