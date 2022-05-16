import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './service/auth.service';

@Component({
    selector: 'app-login',
    templateUrl: 'login.component.html',
    styleUrls:['login.component.scss']
})

export class LoginComponent implements OnInit {
    loginForm!: FormGroup;
    isSubmitted  =  false;
  constructor(private formbuilder: FormBuilder,private authService:AuthService,private router: Router) {}

  ngOnInit() {
    this.loginForm = this.formbuilder.group({
      email: ["",Validators.required],
      pass: ["",Validators.required],
    });
  }
 
  
  login() {
    console.log(this.loginForm.value);
    this.isSubmitted = true;
    if(this.loginForm.invalid){
      return;
    }
    this.authService.login(this.loginForm.value);
    this.router.navigateByUrl('/home');
  }
}