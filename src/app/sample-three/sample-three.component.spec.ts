import { TestBed, inject } from '@angular/core/testing';

import { SampleThreeComponent } from './sample-three.component';

describe('a sample-three component', () => {
	let component: SampleThreeComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				SampleThreeComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([SampleThreeComponent], (SampleThreeComponent) => {
		component = SampleThreeComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});