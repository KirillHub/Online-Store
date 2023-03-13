'use strict';

const { Basket, BasketDevice } = require('./Basket');
const { Device, DeviceInfo } = require('./Device');
const TypeBrand = require('./TypeBrand');
const Brand = require('./Brand');
const Rating = require('./Rating');
const Type = require('./Type');
const User = require('./User');

// User
User.hasOne(Basket);
User.hasMany(Rating);

// Basket
Basket.belongsTo(User);
Basket.hasMany(BasketDevice);

// BasketDevice
BasketDevice.belongsTo(Basket);
BasketDevice.belongsTo(Device);

// Device
Device.hasMany(BasketDevice);
Device.belongsTo(Type);
Device.hasMany(Rating);
Device.hasMany(DeviceInfo);
Device.belongsTo(Brand);

// DeviceInfo
DeviceInfo.belongsTo(Device);

// Brand
Brand.hasMany(Device);
Brand.belongsToMany(Type, { through: TypeBrand });

// Type
Type.hasMany(Device);
Type.belongsToMany(Brand, { through: TypeBrand });

// Rating
Rating.belongsTo(User);
Rating.belongsTo(Device);

module.exports = {
  User,
  Basket,
  BasketDevice,
  Device,
  Type,
  Brand,
  Rating,
  TypeBrand,
  DeviceInfo,
};
