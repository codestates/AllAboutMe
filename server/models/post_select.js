'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class post_select extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      post_select.belongsTo(models.post, {
        foreignKey: "postId"
      });
      post_select.belongsTo(models.select, {
        foreignKey: "selectId"
      });
    }
  };
  post_select.init({

  }, {
    sequelize,
    modelName: 'post_select',
  });
  return post_select;
};