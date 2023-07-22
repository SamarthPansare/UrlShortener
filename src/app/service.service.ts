import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }

  getUrls(str:string){
    return this.http.get("https://api.shrtco.de/v2/shorten?url="+str);
  }
}
