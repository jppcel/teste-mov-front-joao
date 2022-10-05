import { Information } from "./information";
import { Photo } from "./photo";
import { VehicleColor } from "./vehicle_color";
import { VehicleFranchise } from "./vehicle_franchise";
import { VehiclePeriod } from "./vehicle_period";

export interface Vehicle{
  id:string;
  model:string;
  model_details?:string;
  price?:number;
  photos:Array<Photo>;
  informations:Array<Information>;
  colors:Array<VehicleColor>;
  periods:Array<VehiclePeriod>;
  franchises:Array<VehicleFranchise>;
}
