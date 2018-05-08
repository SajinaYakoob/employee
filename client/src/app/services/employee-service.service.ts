import { Injectable } from '@angular/core';
import {Http , Headers} from '@angular/http';
import {Employees} from 'src/app/employees';
import { HttpModule } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http:Http) { }
  
  
  //retrieving employees service
  getEmployees(){
	  return this.http.get('http://localhost:3000/api/employees')
	  .pipe(map(res=> res.json()));
  }
  
  //add employees service
  
  addEmployees(newEmp){
	  var headers = new Headers();
	  headers.append('Content-Type','application/json');
	  return this.http.post('http://localhost:3000/api/employees',newEmp,{headers:headers})
	  .pipe(map(res=>res.json()));
  }
  
  //delete employees service
  
  deleteEmployees(id){
	  return this.http.delete('http://localhost:3000/api/employees/'+id)
	  .pipe(map(res=>res.json()));
  }
}
