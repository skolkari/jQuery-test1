import { TestBed, inject } from '@angular/core/testing';

import { NavHeaderComponent } from './nav-header.component';

describe('a nav-header component', () => {
	let component: NavHeaderComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				NavHeaderComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([NavHeaderComponent], (NavHeaderComponent) => {
		component = NavHeaderComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});