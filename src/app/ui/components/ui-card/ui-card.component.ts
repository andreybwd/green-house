import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'gh-ui-card',
  templateUrl: './ui-card.component.html',
  styleUrls: ['./ui-card.component.scss']
})
export class UiCardComponent implements OnInit {
	@Input() item: any;

  constructor() { }

  ngOnInit() {
  }

}
