import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// import { SingleInputFieldComponent } from './templateDrivenForm/single-input-field/single-input-field.component';
// import { WholeFormComponent } from './templateDrivenForm/whole-form/whole-form.component';
import {RouterModule, Routes } from '@angular/router';
import { ReactiveSingleInputFieldComponent } from './reactiveForm/reactive-single-input-field/reactive-single-input-field.component';
import { ReactiveWholeFormComponent } from './reactiveForm/reactive-whole-form/reactive-whole-form.component';
import { TdfSingleInputFieldComponent } from './templateDrivenForm/tdf-single-input-field/tdf-single-input-field.component';
import { TdfWholeFormComponent } from './templateDrivenForm/tdf-whole-form/tdf-whole-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { DynamicValidationAndUpdationComponent } from './dynamic-validation-and-updation/dynamic-validation-and-updation.component';
import { FormArrayComponent } from './reactiveForm/form-array/form-array.component';

const routes:Routes=[
{path:"tdfSingleInputField", component:TdfSingleInputFieldComponent},
{path:"tdfWholeForm", component:TdfWholeFormComponent},
{path:"reactiveSingleInputField", component:ReactiveSingleInputFieldComponent},
{path:"reactiveWholeForm", component:ReactiveWholeFormComponent},
{path:"twoWayBinding",component:TwoWayBindingComponent},
{path:"DynamicValidationAndUpdationComponent",component:DynamicValidationAndUpdationComponent},
{path:"formArray",component:FormArrayComponent},
]

@NgModule({
  declarations: [
    ReactiveSingleInputFieldComponent,
    ReactiveWholeFormComponent,
    TdfSingleInputFieldComponent,
    TdfWholeFormComponent,
    TwoWayBindingComponent,
    DynamicValidationAndUpdationComponent,
    FormArrayComponent
  ],
  imports: [
    CommonModule,RouterModule.forChild(routes),FormsModule,ReactiveFormsModule
  ],
  exports:[
  ]
})
export class AngularFormsModule { }
