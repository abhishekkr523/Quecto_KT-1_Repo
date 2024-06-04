import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-two-way-binding',
  templateUrl: './two-way-binding.component.html',
  styleUrl: './two-way-binding.component.scss'
})
export class TwoWayBindingComponent {

  text:any;
  name:any;


  // ngModelChange(text:any){
  //   console.log(text)
  // }

  
  // inputText:FormControl=new FormControl("");
  // aChange() {
  //   console.log('Input text value:', this.inputText.value);
  // }
  
  

  // onInputChange(event:any){
  // this.name=event.target.value;
  // console.log(this.name)
  // }
  



  myForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.myForm = this.fb.group({
      textInput: ['']
    });
  }

  onTextChange() {
    console.log('Form value changed:', this.myForm.get('textInput')?.value);
  }
}
