import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { APIConfigService } from 'src/app/shared/configs/api.config';

@Injectable({
  providedIn: 'root'
})
export class ResumeDetailsService {
  

  constructor(private http:HttpClient) { }
}