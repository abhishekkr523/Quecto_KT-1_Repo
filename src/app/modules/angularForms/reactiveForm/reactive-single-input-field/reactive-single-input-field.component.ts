import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-single-input-field',
  templateUrl: './reactive-single-input-field.component.html',
  styleUrl: './reactive-single-input-field.component.scss'
})
export class ReactiveSingleInputFieldComponent {
  usernameControl = new FormControl('', [
    Validators.required,
    Validators.minLength(3),
    Validators.maxLength(12)
  ]);

  // get username() {
  //   return this.usernameControl;
  // }
}
