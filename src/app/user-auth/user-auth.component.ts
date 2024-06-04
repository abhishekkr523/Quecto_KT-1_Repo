import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  MaxValidator,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-auth',
  templateUrl: './user-auth.component.html',
  styleUrl: './user-auth.component.scss',
})
export class UserAuthComponent {
  showLogin: boolean = false;
  showSignup: boolean = true;
  authError: string = '';
  signup: string | undefined;

  loginReactiveData!: FormGroup;

  constructor(private fb: FormBuilder, private Router: Router) {}

  ngOnInit(): void {
    this.loginReactiveData = this.fb.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }
  
  signupData(data: any) {
    console.log('signupData', data);
    if (data && data.userName && data.password) {
      localStorage.setItem('userData', JSON.stringify(data));
      alert('User data saved successfully');

      this.Router.navigate(['footer']);
    } else {
      alert('Invalid data. Username and password are required.');
    }
  }

  loginData() {
    console.log('loginData', this.loginReactiveData.value);
  }

  openLogin() {
    this.showLogin = true;
    this.showSignup = false;
  }
  openSignUp() {
    this.showLogin = false;
    this.showSignup = true;
  }
}
