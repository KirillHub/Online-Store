'use strict';

import { Basket, BasketDevice } from './Basket.js';
import { Brand } from './Brand.js';
import { Device, DeviceInfo } from './Device.js';
import { Rating } from './Rating.js';
import { Type } from './Type.js';
import { TypeBrand } from './TypeBrand.js';
import { User } from './User.js';

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

export { User, Basket, BasketDevice, Device, Type, Brand, Rating, TypeBrand, DeviceInfo };
