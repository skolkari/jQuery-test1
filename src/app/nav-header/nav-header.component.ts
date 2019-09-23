import { Component, OnInit, Input, TemplateRef } from '@angular/core';

@Component({
	selector: 'nav-header',
	templateUrl: 'nav-header.component.html'
})

export class NavHeaderComponent implements OnInit {
	@Input() headerTemplate: TemplateRef<any>;
	@Input() overrideHeader = false;

	ngOnInit() { }
}