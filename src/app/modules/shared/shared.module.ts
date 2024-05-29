import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule
  ],
  exports: [
  ],
})
export class SharedModule { 
  constructor(){
    console.log("shared-module lazyly loaded.")
  }
}
