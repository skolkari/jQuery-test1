import { TestBed, inject } from '@angular/core/testing';

import { SampleOneComponent } from './sample-one.component';

describe('a sample-one component', () => {
	let component: SampleOneComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				SampleOneComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([SampleOneComponent], (SampleOneComponent) => {
		component = SampleOneComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});