import { Vehicle } from "./vehicle";

export interface DefaultRequest{
  ok:number;
  error:number;
  message?:string;
  vehicle?:Vehicle;
}
