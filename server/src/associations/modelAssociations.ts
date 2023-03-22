import * as models from '../models/index.js';

const { _Basket, _BasketDevice, _Brand, _Device, _DeviceInfo, _Rating, _Type, _TypeBrand, _User } =
  models;

// User
_User.hasOne(_Basket);
_User.hasMany(_Rating);

// Basket
_Basket.belongsTo(_User, { foreignKey: 'userId' });
_Basket.hasMany(_BasketDevice);

// BasketDevice
_BasketDevice.belongsTo(_Basket, { foreignKey: 'basketId' });
_BasketDevice.belongsTo(_Device, { foreignKey: 'deviceId' });

// Device
_Device.hasMany(_BasketDevice);
_Device.belongsTo(_Type, { foreignKey: 'typeId' });
_Device.hasMany(_Rating);
_Device.hasMany(_DeviceInfo, { foreignKey: 'info' });
_Device.belongsTo(_Brand, { foreignKey: 'brandId' });

// DeviceInfo
_DeviceInfo.belongsTo(_Device, { foreignKey: 'deviceId' });

// Brand
_Brand.hasMany(_Device);
_Brand.belongsToMany(_Type, { through: _TypeBrand });

// Type
_Type.hasMany(_Device);
_Type.belongsToMany(_Brand, { through: _TypeBrand });

// Rating
_Rating.belongsTo(_User, { foreignKey: 'userId' });
_Rating.belongsTo(_Device, { foreignKey: 'deviceId' });

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
