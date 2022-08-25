import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { observable, Observable } from 'rxjs';
import { APIConfigService } from 'src/app/shared/configs/api.config';
@Injectable({
  providedIn: 'root'
})
export class navbarService {
  private readonly base_url: string;
  constructor(private http: HttpClient, private readonly _base_url: APIConfigService) {
    this.base_url = _base_url.get_baseurl();
  }
  postResume(data: any) {
    return this.http.post(this.base_url + "resume", data)
  }


  upload(file): Observable<any> {
    console.log(file);
    const formData = new FormData();
    formData.append("postresume", file);
    return this.http.post(this.base_url + "post-resume", formData)
  }
}