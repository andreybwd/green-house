import { Component, OnInit } from '@angular/core';
import { DemoDataService } from '../services/demo-data.service';

@Component({
  selector: 'gh-demo-landing',
  templateUrl: './demo-landing.component.html',
  styleUrls: ['./demo-landing.component.scss']
})
export class DemoLandingComponent implements OnInit {
	public hottestList = Array(10).join(".").split(".").map(() => this.demoDataService.mockGreenHouseFactory());
	public nearestList = Array(5).join(".").split(".").map(() => this.demoDataService.mockGreenHouseFactory());

	constructor(private demoDataService: DemoDataService) { }

  ngOnInit() {
  }

}
