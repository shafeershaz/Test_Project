import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpResponse,
  HttpParams
} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../environments/environment';
import { User } from './shared/user.model';



const baseUrl = environment.api_url;
@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  Test(data:User): Observable<HttpResponse<any>>{
    return this.http.post<HttpResponse<any>>(baseUrl + '/api/login/', data, { observe: 'response' });
  }
}
