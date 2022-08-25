import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { appliedjobs, appliedjobscount, Job } from '../model/jobdetails';
import { APIConfigService } from 'src/app/shared/configs/api.config';
@Injectable({
  providedIn: 'root'
})
export class JobBoardService {
  private readonly base_url: string;
  
  constructor(private http:HttpClient,private readonly _base_url: APIConfigService ) {
    this.base_url = _base_url.get_baseurl();
   }
  getappliedjobDetails(value:appliedjobs):Observable<Job>{
    console.log(value)
    return this.http.post<Job>(this.base_url+"appliedjob",value)
   }
   getappliedjobcountDetails(value:appliedjobscount):Observable<Job>{
    console.log(value)
    return this.http.post<Job>(this.base_url+"appliedjobcount",value)
   }
}
