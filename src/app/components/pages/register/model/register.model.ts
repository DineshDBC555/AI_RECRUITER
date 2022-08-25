export class register{
    
    Name:string;
    Email:string;
    phone:string;
    subject:string;
    password:string;
    confirmpassword:string;

}
export class registerdata{
 Active: "1"
CoverPicture: string;
CreatedBy: string;
Dob: number;
Email: string;
JobTitle: string;
Name: string;
Password: string;
Phone: number;
Position: null;
Salary:number;
Subject: string;
UpdatedBy: null;
confirmPassword: number;

}
export class Register {
    flag:1;
    message:String;
    data:Array<registerdata>;
   
}
