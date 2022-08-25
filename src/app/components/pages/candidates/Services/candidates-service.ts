import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Company, Companysearch, filterdata } from '../Model/candidate-model';
import { CompanyDetails } from '../Model/candidate-model';


@Injectable({
    providedIn: 'root'
  })

  export class CandidateService {
    Company = "http://localhost:8000/Company"
    Companyfilter =  "http://localhost:8000/Companyfilter"
    uniqueName = "http://localhost:8000/uniqueName"
    uniqueLocation = "http://localhost:8000/uniqueLocation"
    uniqueCategory = "http://localhost:8000/uniqueCategory"


    constructor(private http:HttpClient) { }

getCompany():Observable<CompanyDetails>{
    return this.http.get<CompanyDetails>(this.Company)
}
getfilterdata(value:Companysearch):Observable<filterdata>{
    console.log(value)
    return this.http.post<filterdata>(this.Companyfilter,value)
   }

getuniqueName():Observable<Company>{
    return this.http.get<Company>(this. uniqueName)
   }
getuniqueLocation():Observable<Company>{
    return this.http.get<Company>(this. uniqueLocation)
   } 
getuniqueCategory():Observable<Company>{
    return this.http.get<Company>(this. uniqueCategory)
   }    
  }
