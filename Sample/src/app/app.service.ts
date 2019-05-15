import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpResponse,
  HttpParams
} from '@angular/common/http';
import { environment } from '../environments/environment';



const baseUrl = environment.api_url;
@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }
  Test(){
    this.http.get<{message:string}>(baseUrl + '/api/login').subscribe((data)=>{
      console.log(data.message)
    });
  }
}
