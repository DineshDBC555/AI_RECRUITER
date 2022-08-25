import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CandidateService } from './Services/candidates-service';

@Component({
  selector: 'app-candidates',
  templateUrl: './candidates.component.html',
  styleUrls: ['./candidates.component.scss']
})
export class CandidatesComponent implements OnInit {
  form: FormGroup = new FormGroup({
    CompanyName: new FormControl,
    Location:new FormControl,
    Category:new FormControl
  });


  Uniquename: any;
  Uniquelocation:any;
  Uniquecategory:any;
  company:any;
  // filterdata:any;
  data:any;
  selectedLocation = "";
  selectedCategory = "";
  selectedCompanyName = "";
  keyword = 'CompanyName';
  location = 'CompanyLocation';
  category = 'Category';
  companySearch = {"CompanyName":"",
  "Category":"",
  "CompanyLocation":""};
  selectEvent(item) {
    // do something with selected item
    
  }

  onChangeSearch(val: string) {
    // fetch remote data from here
    // And reassign the 'data' which is binded to 'data' property.
    console.log(val);
  }
  selectCompanyNameEvent(event){
    console.log(event);
    this.selectedCompanyName = event.CompanyName;

    this.searchcompany();
  }

  onCompanyNameChange(val: string){
    console.log(val);
    this.selectedCompanyName = val;
    
    this.searchcompany();
  }




  selectLocationEvent(event){
    console.log(event);
    this.selectedLocation = event.CompanyLocation;

    this.searchcompany();
  }

  onLocationChange(val: string){
    console.log(val);
    this.selectedLocation = val;
    
    this.searchcompany();
  }


  selectCategoryEvent(event){
    console.log(event);
    this.selectedCategory = event.Category;

    this.searchcompany();
  }

  onCategoryChange(val: string){
    console.log(val);
    this.selectedCategory = val;
    
    this.searchcompany();
  }





  
  
  onFocused(e){
    // do something when input is focused
  }
  constructor(private companydetails: CandidateService, private router: Router) { 
    this.companydetails.getCompany().subscribe((result)=>{
    this.company = result.data;
   this.data = result.data
    console.log(this.company)
  
   
    
    // debugger
    for(let i = 0; i < this.data.length; i++){
      if(this.data[i].OurCompany.length > 250){
        this.data[i].OurCompany=this.data[i].OurCompany.substring(0,249)+"...";
      }
    }
    
    console.log(this.data)
  })
  
  
      this.companydetails. getuniqueName().subscribe((result) => {
        this.Uniquename=result.data;
        console.log(this.Uniquename)
        // console.log("Experience:", this.Uniquename.map((exp) => exp.Experience).join(","))
       //this.expval = this.duplicate.map((tech) => tech.Technology).join(",");
      });
      this.companydetails. getuniqueLocation().subscribe((result) => {
        this. Uniquelocation=result.data;
        console.log(this. Uniquelocation)
        
      });
      this.companydetails. getuniqueCategory().subscribe((result) => {
        this. Uniquecategory=result.data;
        console.log(this. Uniquecategory)
        
      });
    }
    
  
    ngOnInit(): void {
         
     
    }
    searchcompany(){
      // debugger
      console.log(this.selectedLocation)
      
      var value = {"CompanyName":this.selectedCompanyName,
      "CompanyLocation": this.selectedLocation, //this.form.value.CompanyLocation?.CompanyLocation === undefined ? this.form.value.CompanyLocation : this.form.value.CompanyLocation?.CompanyLocation,
      "Category":this.selectedCategory}
      // console.log(this.companySearch)
       console.log(value);
  
      this.companydetails.getfilterdata(value).subscribe((result)=>{
        // this.filterdata = result.data[0][0];
      this.data = result.data[0]   
        console.log(this.data)
      });
        
    } 
  
  }