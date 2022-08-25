
export class BasicDetails{
    id:number;

}


export class user {
        UserId:number;
        Id: number;
        Active: 1
        CoverPicture: string;
        CreatedBy:string;
        CreatedDate: string;
        Email: string;
        Name: string;
        Password: string;
        Phone: number;
        Position: null;
        Salary: null;
        Twitter: null;
        UpdatedBy: null;
        UpdatedDate: null;

 }

export class education{
   
    Title: string;
    Degree:string;
    Institute: string;
    Year:number;
    CreatedBy:string;
    CreatedDate:number;
    UpdatedBy:string;
    UpdatedDate:string;
    UserId:number;
  Id: any;
 }
        
 export class experience{  
    UserId:number;
    CompanyName: string;
    Description:string;
    Position: string;
    Location: string;
    StartDate:number;
    EndDate:number;
    CreatedBy:string;
    CreatedDate:string;
    UpdatedBy:string;
    UpdatedDate:string; 
    Skills:string;

  }

 export class userdata { 
     flag:1;
     message:String;
     data:[Array<user>,Array<education>,Array<experience>,];
 } 
 
 
 export class jobs {
    id:number;
   }

   export class jobdata{  
    Id: number;
    Name: string;
    Location:string;
    Dateposted: number;
    Jobdescription: string;
    Skills: string;
    Technology: string;
    JobType: string;
    Experience: string;
    CreatedBy: string;
    CreatedDate: string;
    Companyid: number;
    Jobresponsibilities:string;
    Salary: number;
}
export class Appliedjob { 
    flag:Number;
    message:String;
    data:[Array<jobdata>];
}

export class jobdetails{ 
    Id:number;
    Name:string;
    JobType:String;
    Dateposted:string;
    Location:string;
    Jobdescription:String;
    Technology:string;
    diff:string
    Experience:string;
    Isapplied:number;
} 
export class Job {
    flag:1;
    message:String;
    data:Array<jobdetails>;
   
}


 

                    

