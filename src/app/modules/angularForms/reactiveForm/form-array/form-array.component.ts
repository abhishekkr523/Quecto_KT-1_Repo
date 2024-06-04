import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-array',
  templateUrl: './form-array.component.html',
  styleUrl: './form-array.component.scss'
})
export class FormArrayComponent {
  emailForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.emailForm = this.fb.group({
      emails: this.fb.array([])
    });
  }

  get emails() {
    return this.emailForm.get('emails') as FormArray;
  }

  addEmail() {
    this.emails.push(this.fb.control(''));
  }

  removeEmail(index: number) {
    this.emails.removeAt(index);
  }

  insertEmail(index: number) {
    this.emails.insert(index, this.fb.control('', Validators.required));
  }

  clearEmails() {
    this.emails.clear();
  }
  
  submit() {
    console.log(this.emailForm.value);
  }
}
