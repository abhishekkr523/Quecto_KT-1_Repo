import { Component } from '@angular/core';
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

  constructor(private Router: Router) {}
  dat: any;
  ngOnInit(): void {
    // this.user.userAuthReload();
    // this.user.signUpFail.subscribe(() => {
    //   this.signup = "This email is already taken. Try another."
    // })
  }
  signUp(data: any): void {
    // this.user.userSignUp(data)
  }
  login(data: any) {
    this.authError = '';
    // this.user.userLogin(data).subscribe((result: any) => {
    //   if (result && result.body && result.body.length) {
    //     localStorage.setItem('users', JSON.stringify(result.body[0]));
    //     this.router.navigate(['/'],)
    //   } else {
    //     console.log("user login fail");
    //     this.user.isLoginError.emit(true)
    //   }
    // });
    // this.user.isLoginError.subscribe((isError) => {
    //   if (isError) {
    //     this.authError = "Email and Password is Incorrect"
    //   }
    // })
  }
  openLogin() {
    this.showLogin = true;
    this.showSignup = false;
  }
  openSignUp() {
    this.showLogin = false;
    this.showSignup = true;
  }
  signupData(data: any) {
    
    if (data && data.userName && data.password) {
      localStorage.setItem('userData', JSON.stringify(data));
      alert('User data saved successfully');

      this.Router.navigate(['footer']);
    } else {
      alert('Invalid data. Username and password are required.');
    }
  }

  loginData(data: any) {
    const storedUserData = localStorage.getItem('userData');

    if (storedUserData) {
      const userData = JSON.parse(storedUserData);

      if (
        data.username === userData.username &&
        data.password === userData.password
      ) {
        alert('Login successful');
        this.Router.navigate(['main']);
      } else {
        alert('Login failed. Invalid username or password.');
      }
    } else {
      alert('No user data found. Please sign up first.');
    }

    if (data.username === '' || data.password === '') {
      alert('Invalid username or password.');
    }
  }
}
