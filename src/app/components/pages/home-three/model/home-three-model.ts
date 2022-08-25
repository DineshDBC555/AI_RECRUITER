export class Homepage {
  flag:1;
  message:String;
  data:Array<String>;
 
}
export class Usercount{
  flag: Number
  message: string
  data: [
      {
          userCount: Number
      }
  ]

}
 export class Companycount{
  flag:Number
  message: string
  data:[
      {
          companyCount:Number
      }
  ]
 }
 export class Jobcount{
  flag:Number
  message: string
  data:[
      {
          jobCount:Number
      }
  ]
 }
 export class technologycount{
  flag:Number
  message:string
  data:Array<technologyObj>
 } 
 
 export class technologyObj
  {
      Technology : String
      technologyCount:Number
 }
