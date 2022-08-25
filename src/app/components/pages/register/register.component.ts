import { Component, OnInit } from '@angular/core';
import { CustomValidators } from './confirmed.validator';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NumbersOnlyService } from 'src/app/services/numbers-only.service';
import { register } from './model/register.model';
import { registerservice } from './services/register.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  public userForm: FormGroup
  public submitted: boolean = false;
  public numbersOnly = new NumbersOnlyService();
  value:register;
  invalid = false;
  errmsg:String;
  

 
  constructor(private router: Router,private register:registerservice) {}

  ngOnInit(): void {
    this.userForm = new FormGroup({
      'Name': new FormControl(null, Validators.required),
      'Phone': new FormControl(null, [Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
      'Email': new FormControl(null, [Validators.required, Validators.email]),
      'Subject': new FormControl(null, Validators.required),
      'Password': new FormControl(null, [
        Validators.required,
        Validators.minLength(8)
      ]),
      'Dob': new FormControl("1998-05-20"),
      'JobTitle': new FormControl(null),
      'Position': new FormControl(null),
      'Salary': new FormControl("00000"),
      'CoverPicture': new FormControl(null),
      'Active': new FormControl("1"),
      'CreatedBy': new FormControl(null),
      'UpdatedBy': new FormControl (null),
      'confirmPassword': new FormControl('', [Validators.required])
    },
    CustomValidators.mustMatch('password', 'confirmPassword') // insert here
    );

  }

  get f() {
    return this.userForm.controls;
  }
 
  onFormSubmit() {
    // this.submitted = true;
    // if (this.userForm.invalid) {
    //   return;
    // }
    
    // this.value={
    //   Name:"",
    //   Email:"",
    //   phone:"",
    //   subject:"",
    //   password:"",
    //   confirmpassword:""
    // }
    // console.log(this.value.Name)
    this.register. getregister(this.userForm.value).subscribe((result)=>{
      console.log(result)
      console.log(this.userForm.value)
      if(result.flag === 1){
        this.invalid =false;  
        this.errmsg = JSON.stringify(result.message); 
      }else{
        this.invalid = true;
        this.errmsg = JSON.stringify(result.message);
        console.log(this.errmsg)
      }
  
    })
  }
}