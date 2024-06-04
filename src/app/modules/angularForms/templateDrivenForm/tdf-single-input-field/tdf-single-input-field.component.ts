import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-tdf-single-input-field',
  templateUrl: './tdf-single-input-field.component.html',
  styleUrl: './tdf-single-input-field.component.scss',
})
export class TdfSingleInputFieldComponent {

  name:FormControl=new FormControl();
  updateValue(){
    this.name.setValue("default text")
  }
}
