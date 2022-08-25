import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http"
import { login, user } from "../model/login.model";
import { Observable } from "rxjs";

@Injectable({
    providedIn:'root'
})
export class loginservice{
    userId: string;
    login(value: any) {
      throw new Error('Method not implemented.');
    }
    data: any;
    value(_value: any) {
      throw new Error('Method not implemented.');
    }
    url="http://localhost:8000/login";
    constructor(private http:HttpClient){

    }
    getlogindetails(){
      return this.http.get(this.url)
    }
    saveloginDetails(data:any[]){

        // console.log(data)
        return this.http.post (this.url,data)

    }
    getlogin(data: login):Observable<user>{
      return this.http.post<user>(this.url,data);
     }
    
}  



