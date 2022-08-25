

export class login{
    email: string;
   password:string
}
export class logindata{  
Id: number;
Active: 1
CoverPicture: string;
CreatedBy:string;
CreatedDate: string;
Email: string;
Name: string;
Password: string;
Phone: number;
Position: null
Salary: null
Twitter: null
UpdatedBy: null
UpdatedDate: null
}
export class user {
    flag:1;
    message:String;
    data:Array<logindata>;
   
}
