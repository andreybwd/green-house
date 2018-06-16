import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'gh-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
	@Output() onHamburgerClick = new EventEmitter<void>()

  constructor() { }

  ngOnInit() {
  }

}
