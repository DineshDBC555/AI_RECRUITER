// import { Component, OnInit } from '@angular/core';
// import { FormControl, FormGroup, Validators } from '@angular/forms';
// import { Router } from '@angular/router';
// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.scss']
// })

// export class LoginComponent implements OnInit {
//   public userForm: FormGroup;
//   public submitted: boolean = false;
 


//   constructor(private  router: Router) { }

//   ngOnInit(): void {
//     this.userForm = new FormGroup({
//       email: new FormControl(null, [Validators.required, Validators.email]),
//       password: new FormControl('', [
//         Validators.required,
//         Validators.minLength(8)
//       ])
//     })
//   }
//   get f() {
//     return this.userForm.controls;
//   }
  
//   onFormSubmit() {
//     debugger
//     console.log(this.userForm.value.email)
//     this.submitted = true;
//     if (this.userForm.invalid) {
//       return;
//     }
//     console.log(this.userForm)
//     if(this.userForm.value.email=="dinesh@navilsoftwares.com"&&this.userForm.value.password=="Dinesh@123"){
//       alert("Login Successfully")
//       this.router.navigate(['/dashboard']);
//       localStorage.setItem("Usertype","Dinesh");

//     }
//   }
// }
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { login} from './model/login.model';
import { loginservice } from './service/login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  public userForm: FormGroup;
  public submitted: boolean = false;
 data:login;
  result: any;
  invalid=false;
  err:String;
  
  constructor(private  router: Router,private login:loginservice) {
    localStorage.clear();
   }

  ngOnInit(): void {
    this.userForm = new FormGroup({
      'Email': new FormControl(null, [Validators.required, Validators.email]),
      'Password': new FormControl(null, [
        Validators.required,
        Validators.minLength(8)
      ]),
      
    })
  }
  get f() {
    return this.userForm.controls;
  }

  onFormSubmit() {
   debugger
    this.submitted = true;
    if (this.userForm.invalid) {
     
      return;
    }
   
      this.login.getlogin(this.userForm.value).subscribe((result)=>{
        // console.log(result);
        // console.log(this.userForm.value);
        if(result.flag === 1){
          console.log(result.data[0])
           this.invalid =false;  
          localStorage.setItem("userID",result.data[0].Id.toString());
          localStorage.setItem("email",result.data[0].Email.toString());
          localStorage.setItem("Usertype", "HR")
          localStorage.setItem('dataSource',JSON.stringify(result));

          this.router.navigate(['']);

        }else{
         this.invalid =true;
         this.err = result.message;
        }
      })
    }
  } 




