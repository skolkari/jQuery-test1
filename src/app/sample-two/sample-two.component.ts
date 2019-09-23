import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Router } from '@angular/router';

@Component({
	selector: 'sample-two',
	templateUrl: 'sample-two.component.html',
	styleUrls: ['./sample-two.component.css']
})

export class SampleTwoComponent implements OnInit {

	constructor(private appService: AppService, private router: Router) {
	}

	ngOnInit() { }

	goHome() {
	}
}