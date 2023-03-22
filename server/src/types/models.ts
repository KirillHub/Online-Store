import {
  Association,
  BelongsTo,
  BelongsToCreateAssociationMixin,
  BelongsToGetAssociationMixin,
  BelongsToManyAddAssociationMixin,
  BelongsToSetAssociationMixin,
  CreationOptional,
  ForeignKey,
  HasManyAddAssociationMixin,
  HasManyAddAssociationsMixin,
  HasManyCountAssociationsMixin,
  HasManyCreateAssociationMixin,
  HasManyGetAssociationsMixin,
  HasManySetAssociationsMixin,
  HasOneCreateAssociationMixin,
  HasOneGetAssociationMixin,
  HasOneSetAssociationMixin,
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
  createBasket: HasOneCreateAssociationMixin<Basket>;
  createRating: HasManyCreateAssociationMixin<Rating>;
  getBasket: HasOneGetAssociationMixin<Basket>;
  getRating: HasManyGetAssociationsMixin<Rating>;
  setBasket: HasOneSetAssociationMixin<Basket, number>;
  setRating: HasManySetAssociationsMixin<Rating, number>;
}

export class Basket extends Model<InferAttributes<Basket>, InferCreationAttributes<Basket>> {
  id: CreationOptional<number>;
  createUser: BelongsToCreateAssociationMixin<User>;
  createBasketDevices: HasManyCreateAssociationMixin<BasketDevice, 'id'>;
  getUser: BelongsToGetAssociationMixin<User>;
  getBasketDevice: HasManyGetAssociationsMixin<BasketDevice>;
  setUser: BelongsToSetAssociationMixin<User, number>;
  setBasketDevices: BelongsToSetAssociationMixin<BasketDevice, number>;
}

export class BasketDevice extends Model<
  InferAttributes<BasketDevice>,
  InferCreationAttributes<BasketDevice>
> {
  id: number;
  createBasket: BelongsToCreateAssociationMixin<Basket>;
  createDevice: BelongsToCreateAssociationMixin<Device>;
  setBasket: BelongsToSetAssociationMixin<Basket, number>;
  setUser: BelongsToSetAssociationMixin<User, number>;
  getBasket: BelongsToGetAssociationMixin<Basket>;
  getUser: BelongsToGetAssociationMixin<User>;
}

export class Brand extends Model<InferAttributes<Brand>, InferCreationAttributes<Brand>> {
  id: CreationOptional<number>;
  name: number;
  setDevices: HasManyAddAssociationMixin<Device, number>;
  setTypeBrand: BelongsToCreateAssociationMixin<TypeBrand>;
}

export class Device extends Model<InferAttributes<Device>, InferCreationAttributes<Device>> {
  id: CreationOptional<number>;
  name: string;
  price: number;
  rating: CreationOptional<number>;
  img: string;
  createBasketDevice: HasManyCreateAssociationMixin<BasketDevice, 'id'>;
  createRating: HasManyCreateAssociationMixin<Rating, 'rate'>;
  createDeviceInfo: HasManyCreateAssociationMixin<DeviceInfo, 'description'>;
  createBrand: BelongsToCreateAssociationMixin<Brand>;
  createType: BelongsToCreateAssociationMixin<Type>;
  getTypeId: BelongsToGetAssociationMixin<Type>;
  getBrandId: BelongsToGetAssociationMixin<Brand>;
  setType: BelongsToSetAssociationMixin<Type, number>;
  setBrand: BelongsToSetAssociationMixin<Brand, number>;
}

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
  createUser: BelongsToCreateAssociationMixin<User>;
  createDevice: BelongsToCreateAssociationMixin<Device>;
  getUser: BelongsToSetAssociationMixin<User, number>;
  getDevice: BelongsToSetAssociationMixin<Device, number>;
  setUser: BelongsToSetAssociationMixin<User, number>;
  setDevice: BelongsToSetAssociationMixin<Device, number>;
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
  createType: BelongsToCreateAssociationMixin<Type>;
  createBrand: BelongsToCreateAssociationMixin<Brand>;
  getType: BelongsToGetAssociationMixin<Type>;
  getBrand: BelongsToGetAssociationMixin<Brand>;
  setType: BelongsToSetAssociationMixin<Type, number>;
  setBrand: BelongsToSetAssociationMixin<Brand, number>;
}
