import { Injectable } from '@angular/core';
import {Http , Headers} from '@angular/http';
import {Employees} from 'src/app/employees';
import { HttpModule } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class RegisterationService {

  constructor( private http: Http) { }
  
  registerUser(user){
	  var headers = new Headers();
	  headers.append('Content-Type','application/json');
	  return this.http.post('http://localhost:3000/api/register',user,{headers:headers})
	  .pipe(map(res=>res.json()));
  }
}
