import { Injectable } from '@angular/core';
import {Http , Headers} from '@angular/http';
import { HttpModule } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:Http) {}
  
  authenticateUser(user){
	  var headers = new Headers();
	  headers.append('Content-Type','application/json');
	  return this.http.post('http://localhost:3000/api/authenticate',user,{headers:headers})
	  .pipe(map(res=>res.json()));
  }
}
