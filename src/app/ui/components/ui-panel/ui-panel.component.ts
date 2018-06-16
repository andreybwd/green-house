import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'gh-ui-panel',
  templateUrl: './ui-panel.component.html',
  styleUrls: ['./ui-panel.component.scss']
})
export class UiPanelComponent implements OnInit {
	@Input() title: string;

  constructor() { }

  ngOnInit() {
  }

}
