export class Job {
    flag:1;
    message:String;
    data:Array<jobdetails>;
   
}
export class jobdetails{ 
    Id:number;
    Name:string;
    JobType:String;   
    Dateposted:string;
    createdDate:number;
    Location:string;
    Jobdescription:String;
    Technology:string;
    diff:string
    Experience:string;
    Isapplied:number;
}
export class filter{ 
    Technology:string;
    JobType:String;
    Location:string;
    Date:string;
    Experience:string;
    Search:string;
}
