import { TestBed, inject } from '@angular/core/testing';

import { SampleTwoComponent } from './sample-two.component';

describe('a sample-two component', () => {
	let component: SampleTwoComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				SampleTwoComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([SampleTwoComponent], (SampleTwoComponent) => {
		component = SampleTwoComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});