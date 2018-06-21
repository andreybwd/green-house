import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'gh-ui-seller-card',
  templateUrl: './ui-seller-card.component.html',
  styleUrls: ['./ui-seller-card.component.scss']
})
export class UiSellerCardComponent implements OnInit {
	@Input() item: any;

  constructor() { }

  ngOnInit() {
  }

}
