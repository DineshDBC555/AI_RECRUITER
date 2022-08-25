// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// @Injectable({
//   providedIn: 'root'
// })
// export class RegisterService {
//   url="http://localhost:8000/User";
//   constructor(private http:HttpClient) {

//    }
//    getUserDetails(data:any){
//     return this.http.post(this.url,data)
//    }
// }
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Register, register } from "../model/register.model";
import { Observable } from "rxjs";

@Injectable({
    providedIn:'root'
})
export class registerservice{
    data:any;
     url="http://localhost:8000/user";
    constructor(private http:HttpClient){

    }
    getloginDetails(){

    return this.http.get(this.url) 
    }
    saveregisterdetails(data:any[]){
        console.log(data)
        return this.http.post (this.url,data)

    }
    getregister(data: register):Observable<Register>{
        return this.http.post<Register>(this.url,data);
       }
     
}