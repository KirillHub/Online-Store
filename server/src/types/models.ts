import {
  Association,
  BelongsTo,
  BelongsToCreateAssociationMixin,
  BelongsToGetAssociationMixin,
  BelongsToManyAddAssociationMixin,
  BelongsToManyAddAssociationMixinOptions,
  BelongsToSetAssociationMixin,
  CreationOptional,
  ForeignKey,
  HasManyAddAssociationMixin,
  HasManyAddAssociationsMixin,
  HasManyCountAssociationsMixin,
  HasOneCreateAssociationMixin,
  HasOneGetAssociationMixin,
  InferAttributes,
  InferCreationAttributes,
  Model,
} from 'sequelize';

export class User extends Model<InferAttributes<User>, InferCreationAttributes<User>> {
  id: CreationOptional<number>;
  name: CreationOptional<string>;
  email: string;
  password: string;
  role: string;
  basketId: HasOneCreateAssociationMixin<Basket>;
  getRating: HasManyAddAssociationMixin<Rating, number>;
}

export class Basket extends Model<InferAttributes<Basket>, InferCreationAttributes<Basket>> {
  id: CreationOptional<number>;
  userId: BelongsToCreateAssociationMixin<User>;
  setBasketDevices: HasManyAddAssociationMixin<BasketDevice, number>;
}

export class BasketDevice extends Model<
  InferAttributes<BasketDevice>,
  InferCreationAttributes<BasketDevice>
> {
  id: number;
  basketId: BelongsToCreateAssociationMixin<Basket>;
  deviceId: BelongsToCreateAssociationMixin<Device>;
}

export class Brand extends Model<InferAttributes<Brand>, InferCreationAttributes<Brand>> {
  id: CreationOptional<number>;
  name: number;
  getDevices: HasManyAddAssociationMixin<Device, number>;
  typeBrandId: BelongsToCreateAssociationMixin<TypeBrand>;
}

export class Device extends Model<InferAttributes<Device>, InferCreationAttributes<Device>> {
  id: CreationOptional<number>;
  name: string;
  price: number;
  rating: CreationOptional<number>;
  img: string;
  getBasketDevice: HasManyAddAssociationMixin<BasketDevice, number>;
  getRating: HasManyAddAssociationMixin<Rating, number>;
  getDeviceInfo: HasManyAddAssociationMixin<DeviceInfo, number>;
  setBrand: BelongsToCreateAssociationMixin<Brand>;
  setType: BelongsToCreateAssociationMixin<Type>;
}
//   typeId: BelongsToCreateAssociationMixin<Type>;
//   brandId: BelongsToCreateAssociationMixin<Brand>;

export class DeviceInfo extends Model<
  InferAttributes<DeviceInfo>,
  InferCreationAttributes<DeviceInfo>
> {
  id: CreationOptional<number>;
  title: string;
  description: string;
  setDevice: BelongsToSetAssociationMixin<Device, number>;
}

export class Rating extends Model<InferAttributes<Rating>, InferCreationAttributes<Rating>> {
  id: number;
  rate: number;
  userId: BelongsToCreateAssociationMixin<User>;
  deviceId: BelongsToCreateAssociationMixin<Device>;
}

// {omit: 'id'}
export class Type extends Model<InferAttributes<Type>, InferCreationAttributes<Type>> {
  id: CreationOptional<number>;
  name: string;
  getDevices: HasManyAddAssociationMixin<Device, number>;
  getTypeBrand: BelongsToManyAddAssociationMixin<TypeBrand, number>;
}

export class TypeBrand extends Model<
  InferAttributes<TypeBrand>,
  InferCreationAttributes<TypeBrand>
> {
  id: number;
  typeId: BelongsToGetAssociationMixin<Type>;
  brandId: BelongsToGetAssociationMixin<Brand>;
}
