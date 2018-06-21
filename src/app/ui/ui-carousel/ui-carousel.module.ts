import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { UiCarouselComponent } from './ui-carousel/ui-carousel.component';

@NgModule({
  imports: [
    CommonModule,
    CarouselModule.forRoot()
  ],
  declarations: [
  	UiCarouselComponent
  ],
  exports: [
  	UiCarouselComponent
  ]
})
export class UiCarouselModule { }
