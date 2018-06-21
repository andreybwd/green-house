import { Component, OnInit, Input, TemplateRef, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'gh-ui-carousel',
  templateUrl: './ui-carousel.component.html',
  styleUrls: ['./ui-carousel.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class UiCarouselComponent implements OnInit {
	@Input() groups: any[];
	@Input() slideTemplate: TemplateRef<any>;

  constructor() { }

  ngOnInit() {
  }

}
