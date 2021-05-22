'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Phone extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Phone.init({
    name: DataTypes.STRING,
    quantity: DataTypes.INTEGER,
    release_date: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Phone',
  });
  return Phone;
};