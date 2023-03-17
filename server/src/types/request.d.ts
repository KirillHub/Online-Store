export declare interface BaseDeviceInter {
  brandId: number;
  typeId: number;
}

export declare interface DeviceInter extends BaseDeviceInter {
  name: string;
  price: number;
  info?: string;
}
