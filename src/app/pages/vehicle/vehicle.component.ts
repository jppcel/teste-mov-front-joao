import { faCheck, faChevronDown, faMapMarkerAlt, faMapPin } from '@fortawesome/free-solid-svg-icons';
import { VehicleController } from './../../_controllers/vehicle.controller';
import { Component, OnInit } from '@angular/core';
import { Vehicle } from 'src/app/_interfaces/vehicle';
import { DefaultRequest } from 'src/app/_interfaces/default_request';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.scss']
})
export class VehicleComponent implements OnInit {

  faChevronDown = faChevronDown;
  faMapMarkerAlt = faMapMarkerAlt;
  faCheck = faCheck;

  constructor(private vehicle_controller:VehicleController) { }

  vehicle:Vehicle = {id:"1",model:"",photos:[],informations:[],colors:[],periods:[],franchises:[]};
  is_requesting = false;
  is_found = false;

  end_plates = [
    {"id":1,"value":"1 ou 2"},
    {"id":2,"value":"3 ou 4"},
    {"id":3,"value":"5 ou 6"},
    {"id":4,"value":"7 ou 8"},
    {"id":5,"value":"9 ou 0"},
  ]

  form = {
    colors_id: "0"
  }

  color_name = "";

  ngOnInit() {
    this.get_vehicle();
  }

  async get_vehicle(){
    this.is_requesting = true;
    let api_return:DefaultRequest = await this.vehicle_controller.get(this.vehicle.id);

    if(api_return.ok == 1){
      if(api_return.vehicle){
        this.vehicle = api_return.vehicle;
        this.is_found = true;
      }
    }
    this.is_requesting = false;
  }

  select_color(id:string,name:string){
    this.form.colors_id = id;
    this.color_name = name;
  }

}
