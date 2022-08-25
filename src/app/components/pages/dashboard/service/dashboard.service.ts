// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { DatePipe } from '@angular/common';

// @Injectable({
//   providedIn: 'root'
// })
// export class DashboardService {
//   apiDate:any;
//   url="http://localhost:8000/User";
//   educationUrl="http://localhost:8000/Education";
//   experienceUrl="http://localhost:8000/Experience";
//   Formurl = "http://localhost:8000/Formdata";
//   Appliedjob = " http://localhost:8000/candidateAppliedjob";
//   constructor(private http:HttpClient,private datePipe : DatePipe) {

//    }
//    getFormDetails(){
//     return this.http.get(this.Formurl);
//    }

//    getUserDetails(){
//     return this.http.get(this.url);
//    }

//    getEducationDetails(){
//     return this.http.get(this.educationUrl);
//    }

//    getExperienceDetails(){
//     return this.http.get(this.experienceUrl)
//    }

//    saveFormDetails(data:any){
//     console.log([data][0].basicdetails[0].Dob)
//     this.apiDate = this.datePipe.transform([data][0].basicdetails[0].Dob, 'yyyy-MM-dd');
//     console.log(this.apiDate)
//     return this.http.post(this.Formurl,[data])
//    }

//    saveUserDetails(data:any){
//     console.log(data)
//     return this.http.post(this.url,data)
//    }

//    saveEducationDetails(data:any){
//     console.log(data)
//     return this.http.post(this.educationUrl,data)
//    }

//    saveExperienceDetails(data:any){
//     console.log(data)
//     return this.http.post(this.experienceUrl,data)
//    }
//    saveAppliedjobs(data:any){
//     console.log(data)
//     return this.http.post(this. Appliedjob,data)
//    }

// }
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BasicDetails, Job, jobdata, userdata, Appliedjob, jobs, jobdetails } from '../Model/dashboard.model';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  private array = [];
  url = "http://localhost:8000/User";
  educationUrl = "http://localhost:8000/Education";
  experienceUrl = "http://localhost:8000/Experience";
  Formurl = "http://localhost:8000/Formdata";
  jobdetails = "http://localhost:8000/jobid";
  candidate = " http://localhost:8000/CandidateDetails";
  Appliedjob = " http://localhost:8000/candidateAppliedjob/";
  coverpicture = "http://localhost:8000/post-image"
  updatecoverpicture = "http://localhost:8000/coverpicture"
  jobDetails: jobdetails;
  constructor(private http: HttpClient) {

  }

  getFormDetails() {
    return this.http.get(this.Formurl);
  }

  getUserDetails() {
    return this.http.get(this.url);
  }

  getEducationDetails() {
    return this.http.get(this.educationUrl);
  }

  getExperienceDetails() {
    return this.http.get(this.experienceUrl)
  }

  saveFormDetails(data: any) {
    console.log([data])
    return this.http.post(this.Formurl, [data])
  }

  saveUserDetails(data: any) {
    console.log(data)
    return this.http.post(this.url, data)
  }

  saveEducationDetails(data: any) {
    console.log(data)
    return this.http.post(this.educationUrl, data)
  }

  saveExperienceDetails(data: any) {
    console.log(data)
    return this.http.post(this.experienceUrl, data)
  }
  getCandidateDetails(id: number): Observable<userdata> {
    return this.http.get<userdata>(this.candidate + '/' + id);
  }
  saveAppliedjobs(data: jobs) {
    console.log(data)
    return this.http.post(this.Appliedjob, data)
  }
  getappliedJobs(jobs: Number): Observable<Appliedjob> {
    return this.http.get<Appliedjob>(this.Appliedjob + jobs);
  }
  getJobDetails(value: string, value1: string): Observable<Job> {
    return this.http.get<Job>(this.jobdetails + '/' + value + '/' + 145)
  }

  upload(file): Observable<any> {
    console.log(file);


    const formData = new FormData();
    formData.append("postImage", file);
    return this.http.post(this.coverpicture, formData)
  }

}
