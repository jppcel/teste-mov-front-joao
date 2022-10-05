import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { lastValueFrom } from "rxjs";
import { environment } from "src/environments/environment";
import { ErrorHelper } from "../_helper/slider-helper/error.helper";
import { DefaultRequest } from "../_interfaces/default_request";

@Injectable({
  providedIn: 'root'
})
export class VehicleController{
  constructor(private http: HttpClient, private errorHelper:ErrorHelper) {

  }

  async get(id:string){
    const result = await lastValueFrom(this.http.get<DefaultRequest>(`${environment.api}/api/v1/vehicle/${id}`))
    .catch((err: HttpErrorResponse) => {
      return this.errorHelper.catchHttpError(err)!;
    });
    return result;
  }

}
