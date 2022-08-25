import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class APIConfigService {
  constructor() {}

  get_baseurl() {
    // return "http://corestar.dyndns-ip.com:8042/api/";
    return "http://localhost:8000/";

  }
}
