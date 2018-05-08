import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EmployeesComponent } from './employees/employees.component';
import { HttpModule } from '@angular/http';
import {Observable} from 'rxjs';

import { map } from 'rxjs/operators';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import { LoginComponent } from './login/login.component';
import {Router} from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { UserHomeComponent } from './user-home/user-home.component';
import {AppRoutingModule} from './app-routing.module';
import { NgForm } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    LoginComponent,
    RegistrationComponent,
    UserHomeComponent
  ],
  imports: [
    BrowserModule,
	HttpModule,
	FormsModule,
	AppRoutingModule,
	ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
