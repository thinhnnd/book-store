import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IAuth } from './models/auth.model';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;
  returnUrl: string;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService
  ) {
    this.returnUrl = '';
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
      passwordRetyped: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
    });
  }

  get f() {
    return this.loginForm.controls;
  }

  ngOnInit(): void {
    // this.loginForm = this.formBuilder.group({
    //   username: ['', Validators.required],
    //   password: ['', Validators.required],
    // });
    // get return url from route parameters or default to '/'
    // this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  getDataFromForm() {
    let authData: IAuth = {
      email: this.loginForm.controls['email'].value,
      password: this.loginForm.controls['password'].value,
    };

    return authData;
  }

  onLogin() {
    this.submitted = true;
    let authData = this.getDataFromForm();
    this.authService.login(authData);
    console.log('submited');
    console.log(this.loginForm);
  }
}
