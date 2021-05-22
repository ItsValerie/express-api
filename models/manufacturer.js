'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Manufacturer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Manufacturer.init({
    name: DataTypes.STRING,
    quantity: DataTypes.INTEGER,
    realease_date: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Manufacturer',
  });
  return Manufacturer;
};