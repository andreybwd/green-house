import { Component, OnInit } from '@angular/core';
import { DemoDataService } from '../services/demo-data.service';

@Component({
  selector: 'gh-demo-landing',
  templateUrl: './demo-landing.component.html',
  styleUrls: ['./demo-landing.component.scss']
})
export class DemoLandingComponent implements OnInit {
	public topGreenHouseList = [
		Array(3).join(".").split(".").map(() => this.demoDataService.mockGreenHouseFactory()),
		Array(3).join(".").split(".").map(() => this.demoDataService.mockGreenHouseFactory()),
		Array(3).join(".").split(".").map(() => this.demoDataService.mockGreenHouseFactory())
	];
	public topSellerList = [
		Array(5).join(".").split(".").map(() => this.demoDataService.mockSellerFactory()),
		Array(5).join(".").split(".").map(() => this.demoDataService.mockSellerFactory())
	];
	public feedbackList = [
		Array(4).join(".").split(".").map(() => this.demoDataService.mockFeedbackFactory()),
		Array(4).join(".").split(".").map(() => this.demoDataService.mockFeedbackFactory()),
		Array(4).join(".").split(".").map(() => this.demoDataService.mockFeedbackFactory())
	];
	public topVegetableList = [
		Array(3).join(".").split(".").map(() => this.demoDataService.mockVegetableFactory()),
		Array(3).join(".").split(".").map(() => this.demoDataService.mockVegetableFactory())
	];

	constructor(private demoDataService: DemoDataService) { }

  ngOnInit() {
  }

}

