import * as models from '../models/index.js';

const { _Basket, _BasketDevice, _Brand, _Device, _DeviceInfo, _Rating, _Type, _TypeBrand, _User } =
  models;

// User
_User.hasOne(_Basket);
_User.hasMany(_Rating);

// Basket
_Basket.belongsTo(_User);
_Basket.hasMany(_BasketDevice);

// BasketDevice
_BasketDevice.belongsTo(_Basket);
_BasketDevice.belongsTo(_Device);

// Device
_Device.hasMany(_BasketDevice);
_Device.belongsTo(_Type);
_Device.hasMany(_Rating);
_Device.hasMany(_DeviceInfo, { as: 'info' });
_Device.belongsTo(_Brand);

// DeviceInfo
_DeviceInfo.belongsTo(_Device);

// Brand
_Brand.hasMany(_Device);
_Brand.belongsToMany(_Type, { through: _TypeBrand });

// Type
_Type.hasMany(_Device);
_Type.belongsToMany(_Brand, { through: _TypeBrand });

// Rating
_Rating.belongsTo(_User);
_Rating.belongsTo(_Device);

// Now the created models are safe to use after declaring the associations
export {
  _User as User,
  _Basket as Basket,
  _BasketDevice as BasketDevice,
  _Device as Device,
  _Type as Type,
  _Brand as Brand,
  _Rating as Rating,
  _TypeBrand as TypeBrand,
  _DeviceInfo as DeviceInfo,
};
