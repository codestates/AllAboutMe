'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class favorite extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      favorite.belongsTo(models.user, {
        onDelete: 'CASCADE',
        foreignKey: 'userId'
      });
      favorite.belongsTo(models.test, {
        onDelete: 'CASCADE',
        foreignKey: 'testId'
      });
      favorite.belongsTo(models.select, {
        onDelete: 'CASCADE',
        foreignKey: 'selectId'
      });
    }
  };
  favorite.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'favorite',
  });
  return favorite;
};