import { Component, OnInit, Input, TemplateRef, ViewChild } from '@angular/core';

@Component({
	selector: 'nav-footer',
	templateUrl: 'nav-footer.component.html'
})

export class NavFooterComponent implements OnInit {
	@Input() footerTemplate: TemplateRef<any>;
	@Input() overrideFooter = false;

	@ViewChild('defaultFooter') defaultFooter: TemplateRef<any>;

	ngOnInit() {
		console.log(this.footerTemplate);
	 }
}