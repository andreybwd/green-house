import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiButtonComponent } from './components/ui-button/ui-button.component';
import { UiCardComponent } from './components/ui-card/ui-card.component';
import { UiPanelComponent } from './components/ui-panel/ui-panel.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
  	UiButtonComponent, 
  	UiCardComponent, 
  	UiPanelComponent
  ],
  exports: [
  	UiButtonComponent, 
  	UiCardComponent, 
  	UiPanelComponent
  ]
})
export class UiModule { }
