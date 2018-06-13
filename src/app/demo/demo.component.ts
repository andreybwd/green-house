import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'gh-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {
	public sidebarOpened = true;

  constructor() { }

  ngOnInit() {
  }

	public toggleSidebar() {
		this.sidebarOpened = !this.sidebarOpened;
	}
}
