'use strict';
module.exports = (sequelize, DataTypes) => {
  const ToDo = sequelize.define('ToDo', {
    description: DataTypes.STRING,
    UserId: DataTypes.INTEGER,
    done: DataTypes.BOOLEAN
  }, {});
  ToDo.associate = function(models) {
    // associations can be defined here
  };
  return ToDo;
};