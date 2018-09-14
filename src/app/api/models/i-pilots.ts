import {BaseEntity} from "./base-entity";

export interface IPilots extends BaseEntity{
  nombre: string;
  apellido: string;
  dni: number;
  ultimoSorteo: Date;
}
