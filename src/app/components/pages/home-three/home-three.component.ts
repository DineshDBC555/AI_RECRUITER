import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { JobService } from '../../pages/jobs/Services/job.service';
import { HomepageService } from './service/home-three-service';
import { strings } from 'ngx-timeago/language-strings/en';
import { TimeagoIntl } from 'ngx-timeago';

@Component({
  selector: 'app-home-three',
  templateUrl: './home-three.component.html',
  styleUrls: ['./home-three.component.scss']
})
export class HomeThreeComponent implements OnInit {
  public jobdetailss:any;
  keyword = 'Location';
  technologyName = '';
  keywordTechnology = 'Technology';
  public countries: any;
  Technology = '';
  Usercount: any;
  CompanyCount: any;
  JobCount: any;
  Technologycount: any;


  selectEvent(item) {
    // do something with selected item
  }

  onChangeSearch(search: string) {
    // fetch remote data from here
    // And reassign the 'data' which is binded to 'data' property.
  }

  onFocused(e) {
    // do something
  }

  form = new FormGroup({
    Search: new FormControl('', [Validators.required]),
    Technology: new FormControl('', [Validators.required]),
    Location: new FormControl('', Validators.required)
  });
  districtLocation: any;
  duplicate: any;
  techval: any;
  // duplicateLocation: import("c:/Job_Portal/AI_RECRUITER/src/app/components/pages/jobs/model/job").jobdetails[];
  locatval: string;
  public searchedValue: any;
  // dummy={Search: this.form.value.search, Technology:'It Services',Location: 'Chennai'};

  constructor(private jobdetails: JobService, private router: Router, private homepageservice: HomepageService,private intl: TimeagoIntl) {
    intl.strings = strings;
    intl.changes.next();
    this.homepageservice.getappliedjobDetails().subscribe((result: any) => {
      this.districtLocation = result.data;

      console.log(this.districtLocation)

    });
    
    // this.jobdetails.getduplicateDetails().subscribe((result: any) => {
    //   //  console.log(result) 
    //   this.duplicate = result.data;
    //   console.log(this.duplicate)
    //   console.log("Technology:", this.duplicate.map((tech) => tech.Technology).join(","))
    //   this.techval = this.duplicate.map((tech) => tech.Technology).join(",");
    // });
  
    // this.jobdetails.getduplicateLocationDetails().subscribe((result) => {
    //   this.duplicateLocation = result.data;
    //   console.log(this.duplicateLocation);

    //   console.log("Location:", this.duplicateLocation.map((loc) => loc.Location).join(","))
    //   this.locatval = this.duplicateLocation.map((loc) => loc.Location).join(",");
    // });
    this.homepageservice.saveHomecount().subscribe((result)=>{
      console.log(result);
      this.Usercount = result.data[0].userCount;

    });
    this.homepageservice.saveCompanycount().subscribe((result)=>{
      console.log(result);
      this.CompanyCount = result.data[0].companyCount;

    });
    this.homepageservice.saveJobcount().subscribe((result)=>{
      console.log(result);
      this.JobCount = result.data[0].jobCount;
    });
    this.homepageservice.saveTechnologycount().subscribe((result)=>{
      console.log(result);
      this.Technologycount = result.data;
      console.log(this.Technologycount);
    });
  }
  date = new Date();
  ngOnInit(): void {
    this.homepageservice.getData().subscribe((data:any)=>{
      console.log(data);
      this.jobdetailss=data.data
      console.log(this.jobdetails);
      
      
          });
  }

  changeCity(e) {
    console.log(e.value)
    this.Location.setValue(e.target.value, {
      onlySelf: true
    })
  }
  get Location() {
    return this.form.get('Location');
  }
  clickJobdetails(jobid: any) {

    this.jobdetails.getJobDetails(jobid,localStorage.getItem("UserID")).subscribe((result) => {
      this.jobdetails.jobDetails = result[0];
      console.log(this.jobdetails.jobDetails)
      this.jobdetailss = result;
      console.log(this.jobdetailss);
      
      this.router.navigate(['/job-details']);
      localStorage.setItem('JobId', this.jobdetails.jobDetails.Id.toString());
    console.log(localStorage.getItem('JobId'));
    });
    
  }
  
  submit() {
   
    console.log(this.form.value);
    this.searchedValue = { Search: this.form.value.Search, Technology: this.form.value.Technology.Technology, Location: this.form.value.Location, };
    console.log(this.searchedValue);

    localStorage.setItem("searchFromIndex", JSON.stringify(this.searchedValue));

    // this.searchedValue={Search: this.form.value.search, Technology:'It Services',Location: 'Chennai'};
    this.router.navigate(['jobs'])


  }
}
