import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  constructor(private _httpClient:HttpClient) { }

  getVehicles():Observable<any>{
    return this._httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction");
  }

  getFilteredVehicles(term:string):Observable<any>{
    return this._httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction?filter="+term);
  }

  getSortedVehicles(column:string,order:string):Observable<any>{
    return this._httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction?sortBy="+column+"&order="+order);
  }

  getPaginatedVehicles(limit:number,page:number){
    return this._httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction?limit="+limit+"&page="+page);
  }

  deleteVehicle(id:number){
    return this._httpClient.delete("https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction/"+id);

  }

  createVehicle(data:any){
    return this._httpClient.post("https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction",data)
  }
}
