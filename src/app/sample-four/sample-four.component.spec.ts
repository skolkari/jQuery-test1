import { TestBed, inject } from '@angular/core/testing';

import { SampleFourComponent } from './sample-four.component';

describe('a sample-four component', () => {
	let component: SampleFourComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				SampleFourComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([SampleFourComponent], (SampleFourComponent) => {
		component = SampleFourComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});