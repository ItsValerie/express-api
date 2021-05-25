'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Phone extends Model {
    static associate(models) {
      Phone.belongsTo(models.Manufacturer, {
        foreignKey: 'manufacturer_id'
      });
    };
  };
  Phone.init({
    manufacturer_id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    quantity: DataTypes.INTEGER,
    release_date: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Phone',
  });
  return Phone;
};
