import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JobService } from '../../pages/jobs/Services/job.service';
import { navbarService } from './services/navbar-style-three-services';
@Component({
  selector: 'app-navbar-style-three',
  templateUrl: './navbar-style-three.component.html',
  styleUrls: ['./navbar-style-three.component.scss']
})
export class NavbarStyleThreeComponent implements OnInit {
  public user:string;
  shortLink: string = "";
  loading: boolean = false; // Flag variable
  public userdetails:any;
  file: File = null; // Variable to store file
  resumeupload: {};
  UserID: any;
  constructor(private jobdetails: JobService,private router:Router,private Navbarservice:navbarService) { 
   this.user=localStorage.getItem("Usertype");
   console.log(this.user);
   
   this.UserID = localStorage.getItem("userID");
   console.log(this.UserID);
   
  }

  ngOnInit(): void {
  }
  onChange(event) {
    this.file = event.target.files[0];
    this.onUpload();
}

onUpload() {
  console.log(this.file.name)
  this.loading = !this.loading;
  console.log(this.file);
  this.resumeupload={
    Resume:localStorage.getItem("ResumeUrl"),
    Id:this.UserID
  }
  console.log(this.resumeupload);
  
  this.Navbarservice.postResume(this.resumeupload).subscribe((result) => {
    console.log(result)
  });
  this.Navbarservice.upload(this.file).subscribe(
      (event: any) => {
        console.log(event.url);
       localStorage.setItem("ResumeUrl",event.url)
      }
  );
}
// this.BasicInfo.upload(this.file).subscribe(
//   (event: any) => {
//     console.log(event.url);
//     this.coverpicture = this.BaseUrl
//     this.educationForm.value.basicdetails[0].CoverPicture = event.url; //this.educationForm.value.basicdetails[0].CoverPicture.replaceAll("\\", "\/");


//     //this.educationForm.value.basicdetails[0].CoverPicture=this.educationForm.value.basicdetails[0].CoverPicture.replaceAll("\\", "\/");
//     this.educationForm.value.education[0].UserId = this.userID;
//     this.educationForm.value.experience[0].UserId = this.userID;
//     this.educationForm.value.basicdetails[0].UserId = this.userID;
//     this.educationForm.value.education[0].CreatedBy = this.email;
//     this.educationForm.value.basicdetails[0].CreatedBy = this.email;
//     this.educationForm.value.experience[0].CreatedBy = this.email;
//     console.log(this.educationForm.value)
//     console.log(this.myControl.value)
//     // this.BasicInfo.saveUserDetails(this.educationForm.value.basicdetails[0]).subscribe((result)=>{
//     //   console.log(result) 
//     // });
//     // this.BasicInfo.saveEducationDetails(this.educationForm.value.education).subscribe((result)=>{
//     //   console.log(result)
//     // });
//     // this.BasicInfo.saveExperienceDetails(this.educationForm.value.experience).subscribe((result)=>{
//     //   console.log(result)
//     // });
//     console.log(this.educationForm.value)
//     this.BasicInfo.saveFormDetails(this.educationForm.value).subscribe((result) => {
//       console.log(result)
//     });
//   });
logout(){
  // localStorage.removeItem("Usertype");
  
  localStorage.clear();

  this.router.navigate(['/login']); 
}
}
