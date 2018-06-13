import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'gh-demo-green-house-grid',
  templateUrl: './demo-green-house-grid.component.html',
  styleUrls: ['./demo-green-house-grid.component.scss']
})
export class DemoGreenHouseGridComponent implements OnInit {
	@Input() data;

  constructor() { }

  ngOnInit() {
  }

}
