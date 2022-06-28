import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.username = '';
    this.password = '';
    this.loginForm = this.formBuilder.group({
      email: '',
      password: '',
    });
  }

  ngOnInit(): void {}

  onLogin() {
    console.log(this.loginForm);
  }
}
