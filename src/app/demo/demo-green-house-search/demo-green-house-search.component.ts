import { Component, OnInit } from '@angular/core';
import { DemoDataService } from '../demo-data.service';

@Component({
  selector: 'gh-demo-green-house-search',
  templateUrl: './demo-green-house-search.component.html',
  styleUrls: ['./demo-green-house-search.component.scss']
})
export class DemoGreenHouseSearchComponent implements OnInit {
	public data = Array(50).join(".").split(".").map(() => this.demoDataService.mockGreenHouseFactory());

	constructor(private demoDataService: DemoDataService) { }

  ngOnInit() {
  }

}
