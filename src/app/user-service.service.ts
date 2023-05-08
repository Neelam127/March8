import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  base_url="http://localhost:8080/api/us";

  addUser(user:User):Observable<any>{
    return this.http.post( `${this.base_url}`,user);
  }


  constructor(private http:HttpClient) { }
}
