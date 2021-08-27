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
      // * ==========[Associate hasMany]==========
      post.hasMany(models.comment, {
        foreignKey:'postId'
      })
      // * ==========[Associate belongsTo]==========
      post.belongsTo(models.user, {
        foreignKey : 'userId',
      })

    }
  };
  post.init({
    content: DataTypes.STRING,
    like: DataTypes.NUMBER
  }, {
    sequelize,
    modelName: 'post',
  });
  return post;
};