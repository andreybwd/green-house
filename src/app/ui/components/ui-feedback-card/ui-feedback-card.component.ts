import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'gh-ui-feedback-card',
  templateUrl: './ui-feedback-card.component.html',
  styleUrls: ['./ui-feedback-card.component.scss']
})
export class UiFeedbackCardComponent implements OnInit {
	@Input() item: any;

  constructor() { }

  ngOnInit() {
  }

}
