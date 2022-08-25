export class CompanyDetails {
    flag:1;
    message:String;
    data:Array<aboutcompany>;
   
}
export class aboutcompany{ 
    Id:number;
    JobId:number;
    OurCompany:string;
    CompanyName:number;
    CompanyLocation:string;
    Category:string;
   
   
}



export class filterdata {
    flag:1;
    message:String;
    data:Array<Companyfilter>;
   
}
export class Companyfilter{ 
    Id:number;
    JobId:number;
    OurCompany:string;
    CompanyName:number;
    CompanyLocation:String;
    Category:string;
   
}



export class company {
    flag:1;
    message:String;
    data:Array<Companysearch>;
   
}
export class Companysearch{ 
    CompanyName:String;
    CompanyLocation:String;
    Category:String;
   
}
export class Company {
    flag:1;
    message:String;
    data:Array<companydetails>;
   
}


export class companydetails{ 
    Id:number;
    JobId:number;
    OurCompany:string;
    Ourmission:String;   
    Ourvision:string;
    CompanyName:number;
    CompanyEmail:string;
    CompanyLocation:String;
    Category:string;
   
}
export class filter{ 
    Technology:string;
    JobType:String;
    Location:string;
    Date:string;
    Experience:string;
    Search:string;
}
