import { Injectable } from '@angular/core';
import * as faker from 'faker';

@Injectable({
  providedIn: 'root'
})
export class DemoDataService {

  	constructor() { }

	public mockGreenHouseFactory() { 
		return { 
			id: faker.random.uuid(), 
			title: faker.random.words(), 
			image: 'assets/green_house.jpg',
			description: faker.lorem.sentence(),
			square: faker.commerce.price(),
			price: faker.commerce.price()
		}
	}	

	public mockSellerFactory() { 
		return { 
			id: faker.random.uuid(), 
			name: faker.name.firstName(), 
			image: 'assets/avatar1.gif',
			params: {
				rating: faker.random.number({max: 10}),
				addedGreenHouses: faker.random.number({max: 100}),
				feedbackCount: faker.random.number({max: 100})
			}
		}
	}

	public mockFeedbackFactory() { 
		return { 
			id: faker.random.uuid(), 
			name: faker.name.firstName(), 
			image: 'assets/avatar1.gif',
			text: faker.lorem.paragraph()
		}
	}

	public mockVegetableFactory() { 
		return { 
			id: faker.random.uuid(), 
			title: faker.random.words(), 
			image: 'assets/vegetable1.jpg'
		}
	}
}
