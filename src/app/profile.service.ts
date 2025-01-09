import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private _httpClient:HttpClient) { }

  getProflies():Observable<any>{
    return this._httpClient.get("https://dummyapi.online/api/social-profiles")
  }
}
