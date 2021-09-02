'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class select extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      select.belongsTo(models.test, {
        foreignKey: 'testId'
      });
      select.hasMany(models.favorite, {
        foreignKey: 'selectId'
      });
    }
  };
  select.init({
    name: DataTypes.STRING,
    image: DataTypes.STRING,
    testId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'select',
    timestamps: false
  });
  return select;
};