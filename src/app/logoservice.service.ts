// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class LogoserviceService {
//   private baseUrl = 'api';
//   constructor(private http : HttpClient) { }
//     getVillage(){
//     return this.http.get(`${this.baseUrl}/villages?type=1`)
//   }
// }
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LogoserviceService {
   private baseUrl = 'api';
  constructor(private http: HttpClient) {}
  getVillage(){
    return this.http.get(`${this.baseUrl}/villages`)
  }
   getVillagesettings(){
    return this.http.get(`${this.baseUrl}/village-settings`)
  }

}
