'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Manufacturer extends Model {
    static associate(models) {
      Manufacturer.hasMany(models.Phone, {
        foreignKey: 'manufacturer_id',
        as: 'phones',
        onDelete: 'cascade',
        hooks: true
      });
    };
  };
  Manufacturer.init({
    name: DataTypes.STRING,
    location: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Manufacturer',
  });
  return Manufacturer;
};
