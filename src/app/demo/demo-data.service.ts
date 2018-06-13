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
			image: faker.image.nature(220, 160, true),
			description: faker.lorem.sentence(),
			square: faker.commerce.price()
		}
	}	
}
