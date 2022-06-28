import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;
  returnUrl: string;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.returnUrl = '';
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      fistName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
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

  onLogin() {
    this.submitted = true;
    console.log('submited');
    console.log(this.loginForm);
  }
}