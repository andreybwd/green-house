import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'gh-ui-vegetable-card',
  templateUrl: './ui-vegetable-card.component.html',
  styleUrls: ['./ui-vegetable-card.component.scss']
})
export class UiVegetableCardComponent implements OnInit {
	@Input() item: any;

  constructor() { }

  ngOnInit() {
  }

}
