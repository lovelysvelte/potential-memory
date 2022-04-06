import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    ReactiveFormsModule,
    RouterModule
  ]
})
export class LoginModule { }
