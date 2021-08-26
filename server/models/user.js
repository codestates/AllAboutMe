'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // * ==========[Associate hasMany]==========
      user.hasMany(models.commnet, {
        foreignKey:'userId'
      })
      user.hasMany(models.favoriate, {
        foreignKey:'userId'
      })
      user.hasMany(models.post, {
        foreignKey:'userId'
      })
    }
  };
  user.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    phone: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'user',
  });
  return user;
};