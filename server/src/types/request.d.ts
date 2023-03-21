import { Partial } from 'lodash';
import { Device } from './models.js';

export declare interface AssociationDeviceInter {
  brandId: number;
  typeId: number;
}

export declare interface Config {
  page?: number;
  limit?: number;
}

export declare interface BaseDeviceInter {
  name: string;
  price: number;
  info?: string;
}

export declare interface DeviceInter extends AssociationDeviceInter, Config {
  name: string;
  price: number;
  info?: string;
}

export declare interface BrandModel extends Model<Brand, {}> {}
export declare interface TypeModel extends Model<Type, {}> {}

export declare interface DeviceModel
  extends Model<InferAttributes<Device>, InferCreationAttributes<Device>>,
    Device,
    BaseDeviceInter {
  brandId: BelongsToGetAssociationMixin<BrandModel>;
  type: BelongsToGetAssociationMixin<TypeModel>;
}
