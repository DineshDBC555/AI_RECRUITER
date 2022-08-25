import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { JobService } from '../../pages/jobs/Services/job.service';
import { HomepageService } from '../home-three/service/home-three-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  keyword = 'Location';
  keywordTechnology = 'Technology';
  form = new FormGroup({
    Search: new FormControl('', [Validators.required]),
    Technology: new FormControl('', [Validators.required]),
    Location: new FormControl('', Validators.required)
  });
  duplicate: any;
  districtLocation: any;
  duplicateLocation: import("c:/Job_Portal/alzo-angular-job-board-template/alzo-ng/src/app/components/pages/jobs/model/job").jobdetails[];
  searchedValue: { Search: any; Technology: any; Location: any; };
  constructor(private homepageservice: HomepageService,private jobdetails: JobService, private router: Router) { 
    this.jobdetails.getduplicateDetails().subscribe((result: any) => {
      //  console.log(result) 
      this.duplicate = result.data;
      console.log(this.duplicate)
      console.log("Technology:", this.duplicate.map((tech) => tech.Technology).join(","))
    
    });
  
    this.jobdetails.getduplicateLocationDetails().subscribe((result) => {
      this.duplicateLocation = result.data;
      console.log(this.duplicateLocation);

    });

  }
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
  ngOnInit(): void {
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
