import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { filter } from './model/job';
import { JobService } from './Services/job.service';




@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss']
})
export class JobsComponent implements OnInit {
  data: any;
  search: string;
  value: any;
  duplicate: any;
  selected: any;
  locat: any;
  duplicateLocation: any;
  duplicateJobtype: any;
  duplicateExperience:any;
  selectedlocation: any;
  selectedJobtype: any;
  selectedExperience: any;
  object: filter;
  techval: any;
  locatval: any;
  jobval: any;
  expval:any;
  Tech: any;
  Loc: any;
  Job: any;
  Exp:any;
  companydetailsid:string;
  technologyempty: any;
  dateresult: any;
  readioSelected: any;
  showcontent = "";
  date: any;
  ExperienceDetails:any;
  indexJobs:any;
  Technologydata:any;
  jobSearchedvalue:any;
  searchvalue = new FormGroup({
    search: new FormControl()
  });
 
  constructor(private jobdetails: JobService, private router: Router) {
  
   
    
    this.jobdetails.getFormDetails().subscribe((result) => {
      console.log(result.data[0].Name)
      this.data = result.data;
      console.log(this.data)
    });
    // this.jobdetails.getFormDetails().subscribe((result) => {
    //   this.data = result.data;
    //   console.log(this.data)
    // });
    this.jobdetails.getFilterExperienceDetails().subscribe((result) => {
      this.ExperienceDetails=result.data;
      console.log(this.ExperienceDetails)
      console.log("Experience:", this.ExperienceDetails.map((exp) => exp.Experience).join(","))
     //this.expval = this.duplicate.map((tech) => tech.Technology).join(",");
    });
    
    this.jobdetails.getduplicateDetails().subscribe((result: any) => {
      //  console.log(result) 

      this.duplicate = result.data;
      // this.duplicate[0].checked = true;
      for(let i=0;i < this.duplicate.length;i++){
        console.log(this.duplicate[i].Technology);
        console.log(this.indexJobs.Technology);
        
        if(this.indexJobs.Technology == this.duplicate[i].Technology){
          this.duplicate[i].checked=true;
        }
      }
      debugger
      console.log(this.indexJobs.Technology);
      
     console.log(this.indexJobs.Location);
     
      
      console.log(this.duplicate)
      console.log("Technology:", this.duplicate.map((tech) => tech.Technology).join(","))
      this.techval = this.duplicate.map((tech) => tech.Technology).join(",");
    });
    this.jobdetails.getduplicateLocationDetails().subscribe((result) => {
      this.duplicateLocation = result.data;
      debugger
      var flag = 0;
      for(let i=0;i < this.duplicateLocation.length;i++){
        console.log(this.duplicateLocation[i].Location);
        console.log(this.indexJobs.Location);
        
        if(this.indexJobs.Location == this.duplicateLocation[i].Location){
          flag +=1;
          debugger
          this.duplicateLocation[i].checked=true;
        }
      }
      if(flag === 0){
        this.duplicateLocation.push({Location:this.indexJobs.Location,checked:true });
        
      }
      // if(this.indexJobs.Location != '' && this.indexJobs.Location != undefined && this.indexJobs.Location != null ){
      //  this.addFilter();
      // }
      console.log("Location:", this.duplicateLocation.map((loc) => loc.Location).join(","))
      this.locatval = this.duplicateLocation.map((loc) => loc.Location).join(",");
    });
    this.jobdetails.getduplicateJobtypeDetails().subscribe((result) => {
      this.duplicateJobtype = result.data;
      console.log("JobType:", this.duplicateJobtype.map((jt) => jt.JobType).join(","))
      this.jobval = this.duplicateJobtype.map((jt) => jt.JobType).join(",")
    });
    this.jobdetails.getduplicateExperienceDetails().subscribe((result) => {
      this.duplicateExperience = result.data;
      console.log("Experience:", this.duplicateExperience.map((exp) => exp.Experience).join(","));
      this.expval=this.duplicateExperience.map((exp) => exp.Experience).join(",")
    });
    setTimeout(() => {
      if((this.indexJobs.Technology != '' && this.indexJobs.Technology != undefined && this.indexJobs.Technology != null)||(this.indexJobs.Location != '' && this.indexJobs.Location != undefined && this.indexJobs.Location != null) ){
        this.addFilter();
         }
    }, 1000);
  
  }
  

  ngOnInit(): void {
    debugger
    var date = new Date();
    date.setDate(date.getDate() - 15);
    console.log(date);
    this.indexJobs=JSON.parse(localStorage.getItem("searchFromIndex"));
    console.log(this.indexJobs);
    if(this.indexJobs != '' && this.indexJobs != undefined && this.indexJobs != null ){
      
      (<FormGroup>this.searchvalue).setValue({
        search:this.indexJobs.Search
      })  
      console.log(this.duplicate);
      
     
    
     // this.selected=this.indexJobs;
      console.log("===============",this.duplicate);
      this.onSearch();
      // this.addFilter();
    }
  }

  // clickJobdetails(title: any) {

  //   this.jobdetails.getJobDetails(title,this.title1).subscribe((result) => {
  //     this.jobdetails.jobDetails = result[0];
  //     console.log(this.jobdetails.jobDetails)
  //     this.data = result;
  //     this.router.navigate(['/job-details']);

  //   });
  // }
  clickJobdetails(jobid: any) {
    debugger
    this.jobdetails.getJobDetails(jobid,localStorage.getItem("UserID")).subscribe((result) => {
      this.jobdetails.jobDetails = result[0];
      console.log(this.jobdetails.jobDetails)
      this.data = result;
      this.router.navigate(['/job-details']);
      localStorage.setItem('JobId', this.jobdetails.jobDetails.Id.toString());
    console.log(localStorage.getItem('JobId'));
    });
    
  }
  onSearch() {

    console.log(this.searchvalue)
    if (this.searchvalue.value.search !== null && this.searchvalue.value.search !== "") {
      this.jobdetails.getSearchDetails(this.searchvalue.value.search).subscribe((result) => {
        console.log(result)
        this.data = result.data[0]
      });
    }
    else {
      this.jobdetails.getFormDetails().subscribe((result) => {
        console.log(result.data[0].Name)
        this.data = result.data;
      });
    }


  }
  indexFilter(){

  }
  addFilter() {
    debugger
    var t = this.duplicate
      .filter(opt => opt.checked)
      .map(opt => opt);
    this.selected = t;
    this.Tech = t.map((tech) => tech.Technology).join(",");
    console.log(this.selected);
    
    console.log(this.Tech);
    var l = this.duplicateLocation
      .filter(opt => opt.checked)
      .map(opt => opt);
    this.selectedlocation = l;
    this.Loc = l.map((Loc) => Loc.Location).join(",");
    console.log(this.Loc)
    var j = this.duplicateJobtype
      .filter(opt => opt.checked)
      .map(opt => opt);
    this.selectedJobtype = j;
    this.Job = j.map((job) => job.JobType).join(",");
    console.log(this.Job)
    var E =  this.ExperienceDetails
    .filter(opt => opt.checked)
    .map(opt => opt);
  this.selectedExperience = E;
  this.Exp = E.map((exp) => exp.Experience).join(",");
  console.log(this.Exp)
    this.showcontent = this.readioSelected;
    console.log(this.showcontent)
    if (this.showcontent == 'Last30Days') {
      this.date = this.getdatevalue(30);
      console.log(this.date);
    } else if (this.showcontent == 'Last15Days') {
      this.date = this.getdatevalue(15);
      console.log(this.date);
    }else if (this.showcontent == 'Last7Days') {
      this.date = this.getdatevalue(7);
      console.log(this.date);
    }
    else if (this.showcontent == 'Last24Hours') {
      this.date = this.getdatevalue(1);
      console.log(this.date);
    }
    // this.jobdetails.getDateposted(this.date).subscribe((result) => {
    //   console.log(result)
    //   this.data=result.data
    // });
    console.log(this.searchvalue.value.search)
     this.object = { "Technology": this.Tech, "Location": this.Loc, "JobType": this.Job, "Date":this.date, "Experience":this.Exp, "Search":this.searchvalue.value.search}
    // console.log(this.object.Technology)
    // if (this.Tech == "") {
    //   this.object.Technology = this.duplicate.map((tech) => tech.Technology).join(",")
    //   console.log(this.object)
    // }
    // if (this.Loc == "") {
    //   this.object.Location = this.duplicateLocation.map((loc) => loc.Location).join(",")
    // }
    // if (this.Job == "") {
    //   this.object.JobType = this.duplicateJobtype.map((jt) => jt.JobType).join(",")
    // }
    // console.log(this.date)
    // if (this.date == undefined){
    //   this.object.Date= null
    // }
    // if (this.searchvalue.value.search == null){
    //   this.object.Search=""
    // }
    // if (this.Exp == ""){
    //   this.object.Experience=  this.ExperienceDetails.map((exp) => exp.Experience).join(",")
    // }
    this.jobSearchedvalue={Search: this.searchvalue.value.search, Technology: this.Tech,Location: this.Loc,JobType:this.Job,Date:this.date,Experience:this.Exp };
    this.jobdetails.getfilterDetails(this.object).subscribe((result) => {
      this.data = result.data[0];
    });
  localStorage.setItem("searchFromIndex",JSON.stringify(this.jobSearchedvalue) )
  }
  getdatevalue(d:number){
    var date = new Date();
    date.setDate(date.getDate() - d);
    var dd = String(date.getDate()).padStart(2, '0');
    var mm = String(date.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = date.getFullYear();
    var result = yyyy + '-' + mm + '-' + dd;
    return result;
  }
}

