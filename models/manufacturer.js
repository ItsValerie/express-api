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
      Manufacturer.hasMany(models.Phone), { onDelete: 'CASCADE' };
      // define association here
    }
  };
  Manufacturer.init({
    name: DataTypes.STRING,
    location: DataTypes.TEXT,
  }, {
    sequelize,
    modelName: 'Manufacturer',
  });
  return Manufacturer;
};
