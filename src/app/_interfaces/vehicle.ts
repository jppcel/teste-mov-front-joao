import { Information } from "./information";
import { Photo } from "./photo";
import { VehicleColor } from "./vehicle_color";

export interface Vehicle{
  id:string;
  model:string;
  model_details?:string;
  photos:Array<Photo>;
  informations:Array<Information>;
  colors:Array<VehicleColor>;
}
