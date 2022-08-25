import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Job, jobdetails } from '../model/job';
@Injectable({
  providedIn: 'root'
})
export class JobService {
  searchurl="http://localhost:8000/jobpost";
  duplicateTechnology="http://localhost:8000/duplicateTechnology";
  duplicateLocation="http://localhost:8000/duplicateLocation"
  duplicateJobtype="http://localhost:8000/duplicateJobtype";
  filterurl="http://localhost:8000/jobfilter";
  jobdetails="http://localhost:8000/jobid";
  dateposted="http://localhost:8000/getdatepost";
  FilterExperience="http://localhost:8000/experiencefilter";
  baseurl="http://localhost:8000/"    
  jobDetails:jobdetails; 

  constructor(private http:HttpClient) { }
  getJobDetails(value:string,value1:string):Observable<Job>{
    return this.http.get<Job>(this.jobdetails+'/'+value+'/'+value1)
   }
  getFormDetails():Observable<Job>{
    return this.http.get<Job>(this.searchurl);
   }
   
  getFilterExperienceDetails():Observable<Job>{
    return this.http.get<Job>(this.FilterExperience);
    
   }
   getDateposted(value:string):Observable<Job>{
    return this.http.get<Job>(this.dateposted+'/'+value);
   }
  getSearchDetails(value:string):Observable<Job>{
    return this.http.get<Job>(this.searchurl+'/'+value)
   }
   getduplicateDetails():Observable<Job>{
    return this.http.get<Job>(this.duplicateTechnology)
   }
   getduplicateLocationDetails():Observable<Job>{
    return this.http.get<Job>(this.duplicateLocation)
   }
   getduplicateJobtypeDetails():Observable<Job>{
    return this.http.get<Job>(this.duplicateJobtype)
   }
   getduplicateExperienceDetails():Observable<Job>{
    return this.http.get<Job>(this.baseurl+"duplicateExperience")
   }
   getfilterDetails(value:any):Observable<Job>{
    console.log(value)
    return this.http.post<Job>(this.filterurl,value)
   }
  
}
