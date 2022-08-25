export interface Jobdetails {
}
export class Job {
    flag:1;
    message:String;
    data:{fieldCount:number,
          affectedRows:number,
          insertId:number,
          serverStatus:number,
          warningCount:number,
          message:string,
          protocol41:string,
          changedRows:string

        };
   
}
export class appliedjobs{ 
    UserId:string;
    JobId:String;
    CreatedBy:string;
    CreatedDate:string;
}
export class appliedjobscount{ 
    UserId:string;
    JobId:String;
}
export class getjob{ 
   id:number;
}