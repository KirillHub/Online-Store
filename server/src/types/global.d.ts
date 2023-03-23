export declare type Files = {
  img: { mv: (path: string) => void };
};
export declare type Value = any;
export declare type ErrorMessage = false | string;
export declare type FieldValues = { [key: string]: Value };
export declare type Validator = (value: Value, fieldValues?: FieldValues) => ErrorMessage;
export declare type FieldValidators = { [key: string]: Validator | Validator[] };
export declare type FieldErrors = { [key: string]: string };
