'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      post.hasMany(models.comment, {
        foreignKey: 'postId'
      });
      post.belongsTo(models.user, {
        onDelete: 'CASCADE',
        foreignKey: 'userId'
      })
    }
  };
  post.init({
    content: DataTypes.STRING,
    like: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'post',
  });
  return post;
};