import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'gh-ui-button',
  templateUrl: './ui-button.component.html',
  styleUrls: ['./ui-button.component.scss']
})
export class UiButtonComponent implements OnInit {
	@Input() title: string;

  constructor() { }

  ngOnInit() {
  }

}
