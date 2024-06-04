import { Component } from '@angular/core';

@Component({
  selector: 'app-tdf-whole-form',
  templateUrl: './tdf-whole-form.component.html',
  styleUrl: './tdf-whole-form.component.scss'
})
export class TdfWholeFormComponent {
  loginData = {
    userName:'',
    email: '',
    password: ''
  };

  login() {
    console.log('Login Form Submitted:', this.loginData);
    // Here you can implement your login logic
  }
}
