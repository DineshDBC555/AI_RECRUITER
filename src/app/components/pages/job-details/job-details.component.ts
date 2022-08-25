import { Component, OnInit } from '@angular/core';
import { JobService } from '../jobs/Services/job.service';
import { JobBoardService } from './service/job-details.service';
import { appliedjobs, appliedjobscount, Jobdetails } from './model/jobdetails';
import { Router } from '@angular/router';
 import { strings } from 'ngx-timeago/language-strings/en';
 import { TimeagoIntl } from 'ngx-timeago';

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.scss']
})

export class JobDetailsComponent implements OnInit {
  public jobDetails:any;
  // public object:appliedjobs;
  public object:any;
  public appliedcount:appliedjobscount;
  public appliedjobs:any;
  public UserId:any;
  public JobId:any;
  public userdata:any;
  constructor(private jobservice:JobService,private jobboardservice:JobBoardService, private router: Router,intl: TimeagoIntl) {
   
    this.userdata=localStorage.getItem("dataSource")
    console.log(this.userdata);
    
    this.UserId=localStorage.getItem("userID");

    if(this.jobservice.jobDetails == undefined){
      
    this.JobId=localStorage.getItem('JobId');
    }
    else{
      this.JobId=localStorage.getItem('JobId')
    }

        
   
    
    console.log(this.UserId);
    
  //   this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
  //     this.router.navigate(['jobs']);
  //     console.log( this.router.navigate(['jobs']));
  // });
  this.jobservice.getJobDetails(this.JobId,this.UserId).subscribe((result) => {
    
    this.jobDetails = result[0];
    console.log(result[0])
    this.appliedjobs=this.jobDetails.Isapplied > 0;
  });
  // this.jobservice.getJobDetails(this.UserId).subscribe((result) => {
  //   this.jobDetails = result[0];
  //   console.log(result[0])
   
  // });
  // alert(this.jobservice.jobDetails);
//  if(this.jobservice.jobDetails == undefined){
//    localStorage.getItem('JobId')
//   this.router.navigate(['job-details'])
//  }
  // if(this.jobservice.jobDetails == undefined){
  //   this.router.navigate(['jobs'])
  // }
    // console.log(jobservice.jobDetails)
    // console.log(jobservice.jobDetails.createdDate)
    // this.jobDetails=jobservice.jobDetails;
    
   //console.log(jobservice.jobDetails.data[0].Id)
   }
  

  ngOnInit(): void {
    console.log(this.jobDetails);
    
    
  }
 
  onApply(){
    
    if(localStorage.getItem("Usertype")===null){
      alert("You must be logged in");
      this.router.navigate(['/login']);
    }
    else{
    this.appliedjobs=true;
    this.object= {UserId: this.UserId,
    JobId: this.JobId,
    CreatedBy:"",
    CreatedDate:""};
    console.log(this.jobservice.jobDetails)
    this.object.JobId=String(this.jobservice.jobDetails.Id);
    this.jobboardservice.getappliedjobDetails(this.object).subscribe((result) => {
      console.log(result)
    });
    this.appliedcount={
      UserId: this.UserId,
      JobId: "",
    };
    console.log(this.jobservice.jobDetails.Isapplied)
    this.router.navigate(['job-details'])
    .then(() => {
      window.location.reload();
    });
    this.appliedcount.JobId=String(this.jobservice.jobDetails.Id);
    this.jobboardservice.getappliedjobcountDetails(this.appliedcount).subscribe((result) => {
      console.log(result)
    });
  }

  }
  //onApply(){
    //     this.appliedjobs=true;
    //     this.object= {UserId: "145",
    //     JobId: "",
    //     CreatedBy:"test@gmail.com",
    //     CreatedDate:""};
    //     this.object.JobId=localStorage.getItem('JobId');
    //     this.jobboardservice.getappliedjobDetails(this.object).subscribe((result) => {
    //       console.log(result)
    //     });
    //     this.appliedcount={
    //       UserId: "145",
    //       JobId: "",
    //     };
    //     console.log(this.jobservice.jobDetails.Isapplied)
    //     // this.router.navigate(['jobs'])
    //     // .then(() => {
    //     //   window.location.reload();
    //     // });
    //     // this.appliedcount.JobId=String(this.jobservice.jobDetails.Id);
    //     // this.jobboardservice.getappliedjobcountDetails(this.appliedcount).subscribe((result) => {
    //     //   console.log(result)
    //     // });
    //   }
    // }
}



