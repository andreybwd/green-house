import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'gh-layout-admin',
  templateUrl: './layout-admin.component.html',
  styleUrls: ['./layout-admin.component.scss']
})
export class LayoutAdminComponent implements OnInit {
	public sidebarOpened = true;

	public toogleSidebar() {
		this.sidebarOpened = !this.sidebarOpened;
	}

  constructor() { }

  ngOnInit() {
  }

}
