import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginform = new FormGroup({
     email : new FormControl('',[Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]),
     password : new FormControl('',[Validators.required,Validators.minLength(8)])
  })
  isFormSubmitted : boolean=false
  constructor(private router : Router) { }

  get loginformcontrols()
  {
    return this.loginform.controls;
  }
  ngOnInit(): void {
  }

  clk_login()
  {
    console.log("clicked")
    if(this.loginform.invalid)
    {
      this.isFormSubmitted=true
      return;
    }
    this.isFormSubmitted=false
    localStorage.setItem("loggedin", "true");
    this.router.navigate(['/dashboard'])
  }
}
