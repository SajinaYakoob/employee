import { Component, OnInit } from '@angular/core';
import {AuthService} from 'src/app/services/auth-service.service';
import { Router} from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[AuthService]
})
export class LoginComponent implements OnInit {
  user_name:String;
  password:String;
  showErrormsg:boolean;
  
  constructor(
	private authService : AuthService,
	private _router: Router
	) { }
	
	
  
	 
  onLoginSubmit(){
	  this.showErrormsg = false;
	  const user = {
		  username:this.user_name,
		  password:this.password
	  };
	  this.authService.authenticateUser(user)
		.subscribe(data =>{
	  console.log(data);
	   this._router.navigate(['/employee']);
	},(error =>{
		if(error.status == 404){
			this.showErrormsg = true;
		}
	}))

  }
  
 
  
  ngOnInit() {
  }

}
