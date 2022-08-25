import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { observable, Observable } from 'rxjs';
import { APIConfigService } from 'src/app/shared/configs/api.config';
import { Companycount, Homepage, Jobcount, technologycount, Usercount } from '../model/home-three-model';
@Injectable({
  providedIn: 'root'
})
export class HomepageService {
    private readonly base_url: string;
    constructor(private http:HttpClient,private readonly _base_url: APIConfigService ) {
        this.base_url = _base_url.get_baseurl();
       }
       getappliedjobDetails():Observable<Homepage>{
        return this.http.get<Homepage>(this.base_url+"districts")
       }
       saveHomecount():Observable<Usercount>{
       
         return this.http.get<Usercount>(this.base_url+"homecount")
        
        }
        saveCompanycount():Observable<Companycount>{
       
          return this.http.get<Companycount>(this.base_url+"getcompanycount")
        } 
        saveTechnologycount():Observable<technologycount>{
         
          return this.http.get<technologycount>(this.base_url+"getTechnology")
        }  
        saveJobcount():Observable<Jobcount>{
          return this.http.get<Jobcount>(this.base_url+"getjob")
        } 
        getData(){
          const url ="http://localhost:8000/getjobdesc";
          return this.http.get(url);
       }
  
}