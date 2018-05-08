import { Component, OnInit } from '@angular/core';
import {EmployeeService} from 'src/app/services/employee-service.service';
import {Employees} from 'src/app/employees';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css'],
  providers:[EmployeeService]
})

export class EmployeesComponent implements OnInit {
	employees : Employees[];
	employee: Employees;
	first_name :string;
	last_name: string;
	mobile_number: string;
	
	

  constructor(private employeeService : EmployeeService) { }
  
  addEmployee(){
	  const newEmployee = {
		  first_name: this.first_name,
		  last_name: this.last_name,
		  mobile_number:this.mobile_number
	  }
	  this.employeeService.addEmployees(newEmployee)
	  .subscribe(employee =>{
		  this.employees.push(newEmployee);
		  this.employeeService.getEmployees()
			.subscribe(employees => 
			  this.employees = employees);
	  });
  }
  
  deleteEmployee(id:any){
	  var employees = this.employees;
	  this.employeeService.deleteEmployees(id)
	  .subscribe(data =>{
		  if(data.n == 1){
			  for(var i=0;i< employees.length;i++){
				  if(employees[i]._id == id){
					  employees.splice(i,1);
				  }
			  }
		  }
	  });
  }

  ngOnInit() {
	  
	  this.employeeService.getEmployees()
	  .subscribe(employees => 
	  this.employees = employees);
  }

}
