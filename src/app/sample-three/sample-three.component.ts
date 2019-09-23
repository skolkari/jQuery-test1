import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
	selector: 'sample-three',
	templateUrl: 'sample-three.component.html',
	styleUrls: ['./sample-three.component.css']
})

export class SampleThreeComponent implements OnInit {
	constructor(private appService: AppService) {
	}
	ngOnInit() { }
}