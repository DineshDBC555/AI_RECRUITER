// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-resume-details',
//   templateUrl: './resume-details.component.html',
//   styleUrls: ['./resume-details.component.scss']
// })
// export class ResumeDetailsComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }

import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard/service/dashboard.service';
// import  {moment } from 'moment';
import * as moment from 'moment';
// import moment = require('moment');

@Component({
  
  selector: 'app-resume-details',
  templateUrl: './resume-details.component.html',
  styleUrls:['./resume-details.component.scss']
})

export class ResumeDetailsComponent implements OnInit {
  userID: any;
  resultdata:any;
  public startdate:any;
  public enddate:any;
  educationArray:any=[];
  experienceArray:any=[];
  profileArray:any=[];
 start:any;
 end:any;
 diff: any;
 diff2 :any;
  // format1: string = "";
  format2:any;
  // date:any;
  // diffInDays: number;
  
  
  

  constructor(private dashboard:DashboardService) {
    this.userID = localStorage.getItem("userID");
    this.dashboard.getCandidateDetails(JSON.parse(this.userID)).subscribe((result) => {
      this.resultdata = result.data;
      this.educationArray =result.data[1];
      this.experienceArray=result.data[2];
      console.log(this.experienceArray[0].StartDate);
      console.log(this.experienceArray[0].EndDate);
      
      
      this.profileArray=result.data[0];
      console.log(JSON.stringify(result));
     console.log(result.data[0]);
    
     this.start = new Date(this.experienceArray[0].StartDate);
     this.end = new Date(this.experienceArray[0].EndDate);
     console.log(this.start);
     console.log(this.end);
     this.diff=this.end.getFullYear()-this.start.getFullYear();
     this.diff2=this.end.getMonth()-this.start.getMonth();
     console.log(this.diff,this.diff2);
    //  console.log(this.diff2);
     
     
     
     

    // let now = moment().format("MM.YYYY");
    // let now2 = moment().format("DD.MM.YYYY");
    // // this.diffInDays = Math.abs(this.format1.diff(this.format2, 'days'));
    // this.diffInDays = Math.abs(this.format1.diff(this.format2, 'days'));
  
    //    this.format1 = now;
    //    this.format2 = now2;
    //    console.log(now);
  
      // this.date =moment(this.format1, "YYYY-MM-DD HH:mm:ss");
      

      
    });
    
    
  
    

    
  

    }
  ngOnInit(): void {
   
  }
 
}
