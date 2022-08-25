// import { Component, OnInit } from '@angular/core';
// import { FormGroup, FormControl, FormArray, FormBuilder, NgForm } from '@angular/forms'
// import { NumbersOnlyService } from 'src/app/services/numbers-only.service';
// import {Observable} from 'rxjs';
// import {map, startWith} from 'rxjs/operators';
// import { DashboardService } from './service/dashboard.service';
// import { DatePipe } from '@angular/common';

// @Component({
//   selector: 'app-dashboard',
//   templateUrl: './dashboard.component.html',
//   styleUrls: ['./dashboard.component.scss']
// })
// export class DashboardComponent implements OnInit {
//   public educationForm:FormGroup;
//   public numbersOnly = new NumbersOnlyService();
//   private apiDate : any;
//   public Dob:any;

//   str:any;
//   myControl = new FormControl();
//   options: string[] = ['Bachelor of computer application', 'Bachelor of computer science', 'Bachelor of Information technology'];
//   filteredOptions: Observable<string[]>;
//   constructor(private fb:FormBuilder,private BasicInfo:DashboardService,private datePipe : DatePipe) {
//     this.educationForm = this.fb.group({
//       basicdetails:this.fb.array([]),
//       education: this.fb.array([]) ,
//       experience: this.fb.array([])
//     });
//     this.addEducation()
//     this.addExperience()
//     this.addBasicDetails()

//    }

//    public Degree = {name:"BSC"};
//    education() : FormArray {
//     return this.educationForm.get("education") as FormArray
//   }
//   basicdetails() : FormArray{
//     return this.educationForm.get("basicdetails") as FormArray

//   }
//   experience() : FormArray {
//     return this.educationForm.get("experience") as FormArray
//   }
//   newBasicDetails(): FormGroup {
//     return this.fb.group({
//       Name: '',
//       Email: '',
//       Password:'',
//       Phone: '',
//       Dob:'',
//       JobTitle:'',
//       Position:'',
//       Salary:'',
//       CoverPicture:'',
//       Active:1,
//       CreatedBy:'',
//       CreatedDate:'',
//       UpdatedBy:'',
//       UpdatedDate:'',
//       Facebook:'',
//       Twitter:'',
//       Instagram:'',
//       LinkedIn:''
//     })
//   }

//   newEducation(): FormGroup {
//     return this.fb.group({

//       Title: '',
//       Degree: '',
//       Institute: '',
//       Year:'',
//       Active:1,
//       CreatedBy:'',
//       CreatedDate:'',
//       UpdatedBy:'',
//       UpdatedDate:'',
//       UserId:145
//     })
//   }

//   range = new FormGroup({
//     start: new FormControl(),
//     end: new FormControl()
//   });

//   newExperience(): FormGroup {
//     return this.fb.group({
//       UserId:145,
//       CompanyName: '',
//       Position: '',
//       Location: '',
//       StartDate:'',
//       EndDate:'',
//       Active:1,
//       CreatedBy:'',
//       CreatedDate:'',
//       UpdatedBy:'',
//       UpdatedDate:'',
//     })
//   }
//   addBasicDetails(){
//     this.basicdetails().push(this.newBasicDetails());
//   }

//   addEducation() {
//     this.education().push(this.newEducation());
//   }

//   addExperience() {
//     this.experience().push(this.newExperience());
//   }

//   removeEducation(i:number) {
//     this.education().removeAt(i);
//   }

//   removeExperience(i:number) {
//     this.experience().removeAt(i);
//   }

//   onSubmit() {
//     this.apiDate = this.datePipe.transform(this.educationForm.value.basicdetails[0].Dob, 'yyyy-MM-dd');
//     console.log(this.apiDate)
//     this.educationForm.value.basicdetails[0].CoverPicture=this.educationForm.value.basicdetails[0].CoverPicture.replaceAll("\\", "\/");
//     console.log(this.educationForm.value.basicdetails[0].CoverPicture.replaceAll("\\", "\/"));
//     console.log(this.educationForm.value)
//     // this.BasicInfo.saveUserDetails(this.educationForm.value.basicdetails[0]).subscribe((result)=>{
//     //   console.log(result)
//     // });
//     // this.BasicInfo.saveEducationDetails(this.educationForm.value.education).subscribe((result)=>{
//     //   console.log(result)
//     // });
//     // this.BasicInfo.saveExperienceDetails(this.educationForm.value.experience).subscribe((result)=>{
//     //   console.log(result)
//     // });
//     this.BasicInfo.saveFormDetails(this.educationForm.value).subscribe((result)=>{
//       console.log(result)
//     });

//   }
//   ngOnInit(): void {
//     this.filteredOptions = this.myControl.valueChanges.pipe(
//       startWith(''),
//       map(value => this._filter(value)),
//     );
//   }
//   private _filter(value: string): string[] {
//     const filterValue = value.toLowerCase();

//     return this.options.filter(option => option.toLowerCase().includes(filterValue));
//   }
// }
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, FormBuilder, NgForm, Validators } from '@angular/forms'
import { NumbersOnlyService } from 'src/app/services/numbers-only.service';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { DashboardService } from './service/dashboard.service';
import { BasicDetails, education, userdata } from './Model/dashboard.model';
import { COMMA, ENTER } from '@angular/cdk/keycodes'
import { MatChipInputEvent } from '@angular/material/chips';
import { JobService } from '../jobs/Services/job.service';
import { APIConfigService } from 'src/app/shared/configs/api.config';
import { user } from '../login/model/login.model';
import { HomepageService } from '../home-three/service/home-three-service';
import { Router } from '@angular/router';
import { strings } from 'ngx-timeago/language-strings/en';
import { TimeagoIntl } from 'ngx-timeago';

export interface skill {
  name: string;

}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  BasicDetails: BasicDetails;
  public educationForm: FormGroup;
  public numbersOnly = new NumbersOnlyService();
  str: any;
  form = new FormGroup({
    Search: new FormControl('', [Validators.required]),
    Technology: new FormControl('', [Validators.required]),
    Location: new FormControl('', Validators.required)
  });
  myControl = new FormControl();
  options: string[] = ['Bachelor of computer application', 'Bachelor of computer science', 'Bachelor of Information technology'];
  filteredOptions: Observable<string[]>;

  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  skills: any[] = [{ name: 'Angular' }, { name: 'React' }, { name: 'dotNet' }];
  userID: string;
  email: string;
  item: any;
  data: any;
  title1: any;
  shortLink: string = "";
  loading: boolean = false; // Flag variable
  file: File = null; // Variable to store file
  coverpicture: any;
  public dataSource: user;
  userName: any;
  appliedjob: any;
  duplicate: any;
  keyword = 'Location';
  keywordTechnology = 'Technology';
  districtLocation: any;
  public searchedValue: any;
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
  constructor(private fb: FormBuilder, private BasicInfo: DashboardService, private jobdetails: JobService, public BaseUrl: APIConfigService, private router: Router, intl: TimeagoIntl,private homepageservice: HomepageService) {
    if (localStorage.getItem("userID") === null) {
      alert("You must be logged in..!");
      this.router.navigate(['login']);
    }
    // =======
    //   item:any;
    //   data: any;
    //   title1:any;




    //   constructor(private fb:FormBuilder,private BasicInfo:DashboardService,private router:Router,intl: TimeagoIntl) {
      this.homepageservice.getappliedjobDetails().subscribe((result: any) => {
        this.districtLocation = result.data;
  
        console.log(this.districtLocation)
  
      });
    intl.strings = strings;
    intl.changes.next();


    // >>>>>>> 858258d9fc79623998976f7fe323c3cf1c7bc66d
    this.educationForm = this.fb.group({
      basicdetails: this.fb.array([]),
      education: this.fb.array([]),
      experience: this.fb.array([]),
      skill: this.fb.array([]),


    });
    this.jobdetails.getduplicateDetails().subscribe((result: any) => {
      //  console.log(result) 
      this.duplicate = result.data;
      console.log(this.duplicate)
      console.log("Technology:", this.duplicate.map((tech) => tech.Technology).join(","))
     // this.techval = this.duplicate.map((tech) => tech.Technology).join(",");
    });
    
    this.addEducation()
    this.addExperience()
    this.addBasicDetails()
    // // <<<<<<< HEAD
    this.dataSource = JSON.parse(localStorage.getItem('dataSource'));
    this.userName = this.dataSource.data[0].Name;
    console.log(this.dataSource);

    //console.log(this.dataSource.data[0].CoverPicture);
    this.coverpicture = this.BaseUrl.get_baseurl() + this.dataSource.data[0].CoverPicture;
    console.log(this.coverpicture);
    // // =======



    // >>>>>>> 858258d9fc79623998976f7fe323c3cf1c7bc66d

    this.userID = localStorage.getItem("userID");
    this.email = localStorage.getItem("email");
    //  console.log(this.email);
    this.BasicInfo.getCandidateDetails(JSON.parse(this.userID)).subscribe((result) => {
      console.log(result);
  // for(let i = 0; i< result.data[1].length; i++){
      //   this.education().push(this.newEducation());
      //   console.log(i);
        
      // }
      if(this.education().length > 0){
      this.education().push(this.newEducation());
      }
      
      if(this.experience().length > 2){
        this.experience().push(this.newEducation());
      }

      (<FormGroup>this.educationForm).setValue({
        basicdetails: result.data[0],
        education: result.data[1],
        experience: result.data[2],
        skill: result.data[2],
        
      })



    });
    this.BasicInfo.getappliedJobs(Number(this.userID)).subscribe((result)=>{
     
      console.log(result)
      
      this.appliedjob = result.data;
 console.log(this.appliedjob);
 
    });

  }

  onChange(event) {
   //this.indexJobs.Location != '' && this.indexJobs.Location != undefined && this.indexJobs.Location != null
  
    this.file = event.target.files[0];
   
  }

  date = new Date();

  public Degree = { name: "BSC" };
  education(): FormArray {
    return this.educationForm.get("education") as FormArray
  }
  basicdetails(): FormArray {
    return this.educationForm.get("basicdetails") as FormArray

  }
  experience(): FormArray {
    return this.educationForm.get("experience") as FormArray
  }

  skill(): FormArray {
    return this.educationForm.get("skill") as FormArray
  }
  numberOnly(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;

  }
  newBasicDetails(): FormGroup {
    return this.fb.group({
      Active: '',
      Id: '',
      Name: '',
      Email: '',
      Password: '',
      Phone: '',
      Dob: '',
      JobTitle: '',
      Position: '',
      Salary: '',
      Resume:'',
      CoverPicture: '',
      CreatedBy: this.email,
      CreatedDate: '',
      UpdatedBy: '',
      UpdatedDate: '',
      Facebook: '',
      Twitter: '',
      Instagram: '',
      LinkedIn: '',
      UserId: this.userID
    })
  }

  newEducation(): FormGroup {
    return this.fb.group({
      Active: '',
      Id: '',
      Title: '',
      Degree: '',
      Institute: '',
      Year: '',
      CreatedBy: this.email,
      CreatedDate: '',
      UpdatedBy: '',
      UpdatedDate: '',
      UserId: this.userID
    })

  }

  range = new FormGroup({
    start: new FormControl(),
    end: new FormControl()
  });

  newExperience(): FormGroup {
    return this.fb.group({
      Active: '',
      Id: '',
      UserId: this.userID,
      CompanyName: '',
      Position: '',
      Description: '',
      Location: '',
      StartDate: '',
      EndDate: '',
      CreatedBy: '',
      CreatedDate: '',
      UpdatedBy: '',
      UpdatedDate: '',
      Skills: ''
    })
  }
  newskill(): FormGroup {
    return this.fb.group({
      skills: ''
    })
  }
  //  Basicdetails(values): FormGroup {
  //   return this.fb.group({
  //     Name:values.Name,
  //     Email:values.Email, 
  //     Password:'',
  //     Phone: '', 
  //     Dob:'',
  //     JobTitle:'',
  //     Position:'',
  //     Salary:'',
  //     CoverPicture:'',
  //     CreatedBy:this.email,
  //     CreatedDate:'',
  //     UpdatedBy:'',
  //     UpdatedDate:'',
  //     Facebook:'',
  //     Twitter:'',
  //     Instagram:'',
  //     LinkedIn:'',
  //     UserId:this.userID
  //   })
  // }
  addBasicDetails() {
    this.basicdetails().push(this.newBasicDetails());
  }

  addEducation() {
    this.education().push(this.newEducation());
  }

  addExperience() {
    this.experience().push(this.newExperience());
  }
  addskilldetails() {
    this.skill().push(this.newskill());
  }

  removeEducation(i: number) {
    this.education().removeAt(i);
  }

  removeExperience(i: number) {
    this.experience().removeAt(i);
  }
  submit() {
   
    console.log(this.form.value);
    this.searchedValue = { Search: this.form.value.Search, Technology: this.form.value.Technology.Technology, Location: this.form.value.Location, };
    console.log(this.searchedValue);

    localStorage.setItem("searchFromIndex", JSON.stringify(this.searchedValue));

    // this.searchedValue={Search: this.form.value.search, Technology:'It Services',Location: 'Chennai'};
    this.router.navigate(['jobs'])


  }

  onSubmit() {
    
    console.log(this.skills);
    console.log(this.educationForm.value)
    this.loading = !this.loading;
    console.log(this.file);
    this.loading = !this.loading;
    console.log(this.file);
    console.log(this.educationForm.value.basicdetails[0].Salary)
    if(this.educationForm.value.basicdetails[0].Salary != undefined || this.educationForm.value.basicdetails[0].Salary != null || this.educationForm.value.basicdetails[0].Salary != ""){
      this.educationForm.value.basicdetails[0].Salary=0;
    }
if(this.file != undefined){
    this.BasicInfo.upload(this.file).subscribe(
      (event: any) => {
        console.log(event.url);
        this.coverpicture = this.BaseUrl
        this.educationForm.value.basicdetails[0].CoverPicture = event.url; //this.educationForm.value.basicdetails[0].CoverPicture.replaceAll("\\", "\/");
      });
    }
        //this.educationForm.value.basicdetails[0].CoverPicture=this.educationForm.value.basicdetails[0].CoverPicture.replaceAll("\\", "\/");
        this.educationForm.value.education[0].UserId = this.userID;
        this.educationForm.value.experience[0].UserId = this.userID;
        this.educationForm.value.basicdetails[0].UserId = this.userID;
        this.educationForm.value.education[0].CreatedBy = this.email;
        this.educationForm.value.basicdetails[0].CreatedBy = this.email;
        this.educationForm.value.experience[0].CreatedBy = this.email;
        console.log(this.educationForm.value)
        console.log(this.myControl.value)
        // this.BasicInfo.saveUserDetails(this.educationForm.value.basicdetails[0]).subscribe((result)=>{
        //   console.log(result) 
        // });
        // this.BasicInfo.saveEducationDetails(this.educationForm.value.education).subscribe((result)=>{
        //   console.log(result)
        // });
        // this.BasicInfo.saveExperienceDetails(this.educationForm.value.experience).subscribe((result)=>{
        //   console.log(result)
        // });
        console.log(this.educationForm.value)
     
   

      this.BasicInfo.saveFormDetails(this.educationForm.value).subscribe((result) => {
        console.log(result)
      });

  }
  ngOnInit(): void {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value)),
    );
  }
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();


    if (value) {
      this.skills.push({ name: value });
    }

    // Clear the input value
    event.chipInput!.clear();
  }

  remove(skills: any): void {
    const index = this.skills.indexOf(skills);

    if (index >= 0) {
      this.skills.splice(index, 1);
    }
  }

  clickJobdetails(items: any) {

    this.BasicInfo.getJobDetails(items, this.title1).subscribe((result) => {
      this.BasicInfo.jobDetails = result[0];
      console.log(this.BasicInfo.jobDetails)
      this.item = result;
      localStorage.setItem('JobId', this.BasicInfo.jobDetails.Id.toString());
      this.router.navigate(['/job-details']);
      console.log(localStorage.getItem('JobId'));

    });
  }

  // clickJobdetails(items: any) {

  //   this.BasicInfo.getJobDetails(items,this.title1).subscribe((result) => {
  //     this.BasicInfo.jobDetails = result[0];
  //     console.log(this.BasicInfo.jobDetails)
  //     this.data = result;
  //     this.router.navigate(['/job-details']);
  //     localStorage.setItem('JobId', this.BasicInfo.jobDetails.Id.toString());
  //   console.log(localStorage.getItem('JobId'));
  //   });

  //  }
}






