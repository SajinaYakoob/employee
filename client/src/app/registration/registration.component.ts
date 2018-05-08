import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterationService} from 'src/app/services/registeration.service';
import {Users} from 'src/app/users';
import { FormsModule }   from '@angular/forms';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
	users : Users[];
	user: Users;
	user_name :string;
	email: string;
	password: string;

  constructor( private router: Router,
        private registerationService: RegisterationService
		) { }

		
	registerUser() {
		 const newUsers = {
			user_name:this.user_name,
			email:this.email,
			password:this.password
		}
        this.registerationService.registerUser(newUsers)
            .subscribe(
                data => {
                    // set success message and pass true paramater to persist the message after redirecting to the login page
                    //this.alertService.success('Registration successful', true);
                    this.router.navigate(['/login']);
                },
                error => {
                    // this.alertService.error(error);
                    // this.loading = false;
                });
    }
  ngOnInit() {
  }

}
