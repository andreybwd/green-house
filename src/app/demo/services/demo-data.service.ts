import { Injectable } from '@angular/core';
import * as faker from 'faker';

@Injectable({
  providedIn: 'root'
})
export class DemoDataService {

  	constructor() { }

	mockGreenHouseFactory() { 
		return { 
			id: faker.random.uuid(), 
			title: faker.name.title(), 
			image: 'assets/green_house.jpg', // faker.image.nature(250, 100, true),
			description: faker.lorem.sentence(),
			square: faker.commerce.price(),
			price: faker.commerce.price()
		}
	}	
}
