import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiButtonComponent } from './components/ui-button/ui-button.component';
import { UiCardComponent } from './components/ui-card/ui-card.component';
import { UiPanelComponent } from './components/ui-panel/ui-panel.component';
import { UiSellerCardComponent } from './components/ui-seller-card/ui-seller-card.component';
import { UiFeedbackCardComponent } from './components/ui-feedback-card/ui-feedback-card.component';
import { UiVegetableCardComponent } from './components/ui-vegetable-card/ui-vegetable-card.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
  	UiButtonComponent, 
  	UiCardComponent, 
  	UiPanelComponent, 
    UiSellerCardComponent, 
    UiFeedbackCardComponent, 
    UiVegetableCardComponent
  ],
  exports: [
  	UiButtonComponent, 
  	UiCardComponent, 
  	UiPanelComponent,
    UiSellerCardComponent,
    UiFeedbackCardComponent,
    UiVegetableCardComponent
  ]
})
export class UiModule { }
