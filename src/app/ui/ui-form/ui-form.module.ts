import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiFormInputComponent } from './ui-form-input/ui-form-input.component';
import { UiFormSelectComponent } from './ui-form-select/ui-form-select.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [UiFormInputComponent, UiFormSelectComponent]
})
export class UiFormModule { }
