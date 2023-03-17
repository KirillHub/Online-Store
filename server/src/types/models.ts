import {
  Association,
  CreationOptional,
  ForeignKey,
  InferAttributes,
  InferCreationAttributes,
  Model,
} from 'sequelize';

export class User extends Model<InferAttributes<User>, InferCreationAttributes<User>> {
  id: number;
  name: CreationOptional<string>;
  email: string;
  password: string;
  role: string;
}

export class Basket extends Model<InferAttributes<Basket>, InferCreationAttributes<Basket>> {
  id: number;
}

export class BasketDevice extends Model<
  InferAttributes<BasketDevice>,
  InferCreationAttributes<BasketDevice>
> {
  id: number;
}

export class Brand extends Model<InferAttributes<Brand>, InferCreationAttributes<Brand>> {
  id: CreationOptional<number>;
  name: number;
}

export class Device extends Model<InferAttributes<Device>, InferCreationAttributes<Device>> {
  id: CreationOptional<number>;
  name: string;
  price: number;
  rating: CreationOptional<number>;
  img: string;
}

export class DeviceInfo extends Model<
  InferAttributes<DeviceInfo>,
  InferCreationAttributes<DeviceInfo>
> {
  id: number;
  title: string;
  description: string;
}

export class Rating extends Model<InferAttributes<Rating>, InferCreationAttributes<Rating>> {
  id: number;
  rate: number;
}

// {omit: 'id'}
export class Type extends Model<InferAttributes<Type>, InferCreationAttributes<Type>> {
  id: CreationOptional<number>;
  name: string;
}

export class TypeBrand extends Model<
  InferAttributes<TypeBrand>,
  InferCreationAttributes<TypeBrand>
> {
  id: number;
}
