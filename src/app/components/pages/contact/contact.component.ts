import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { JobService } from '../../pages/jobs/Services/job.service';
import { HomepageService } from '../home-three/service/home-three-service'; 
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  keyword = 'Location';
  keywordTechnology = 'Technology';
  districtLocation: any;
  duplicate: any;
  searchedValue: { Search: any; Technology: any; Location: any; };
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
  constructor(private jobdetails: JobService, private router: Router, private homepageservice: HomepageService) {
    this.homepageservice.getappliedjobDetails().subscribe((result: any) => {
      this.districtLocation = result.data;

      console.log(this.districtLocation)

    });
    
    this.jobdetails.getduplicateDetails().subscribe((result: any) => {
      //  console.log(result) 
      this.duplicate = result.data;
      console.log(this.duplicate)
      console.log("Technology:", this.duplicate.map((tech) => tech.Technology).join(","))
    });
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
