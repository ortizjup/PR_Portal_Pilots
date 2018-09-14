import {BaseEntity} from "./base-entity";

export interface IUser extends BaseEntity{
  userName: string;
  password: any;
}
