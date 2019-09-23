import { TestBed, inject } from '@angular/core/testing';

import { NavFooterComponent } from './nav-footer.component';

describe('a nav-footer component', () => {
	let component: NavFooterComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				NavFooterComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([NavFooterComponent], (NavFooterComponent) => {
		component = NavFooterComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});