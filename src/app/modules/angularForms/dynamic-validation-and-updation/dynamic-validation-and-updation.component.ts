import { formatCurrency } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-dynamic-validation-and-updation',
  templateUrl: './dynamic-validation-and-updation.component.html',
  styleUrl: './dynamic-validation-and-updation.component.scss',
})
export class DynamicValidationAndUpdationComponent {
  // userName:FormControl=new FormControl("");
  // changeFormControl(){
  //   this.userName.setValue("dynamic value")
  // }

  // userName:FormControl= new FormControl("");
  // changeValidation(){
  //   this.userName.setValidators([Validators.required]);
  //   this.userName.updateValueAndValidity();
  // }

  // userName:FormControl= new FormControl("",[Validators.required]);
  // clearValidation(){
  //   this.userName.clearValidators();
  //   this.userName.updateValueAndValidity();
  // }



  // metersControl: any = 0;
  // centimetersControl: any = 0;
  // inputData:FormControl= new FormControl("")
  // constructor() {
  //    this.metersControl = this.inputData
  //   this.metersControl.valueChanges.subscribe(() => {
  //     if (this.metersControl.value) {
  //       this.centimetersControl = this.metersControl.value * 1000;
  //     }else{
  //       this.centimetersControl=0;
  //     }
  //   });
  // }



inputData:FormControl= new FormControl("", [Validators.required])
submit(){
  this.inputData.markAsTouched()
}


}
