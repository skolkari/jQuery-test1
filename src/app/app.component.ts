import { Component, TemplateRef, OnInit } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'angular5-seed';
  hideDefaultHeader = false;

  constructor(private appService: AppService) {
   
    this.appService.headerObservable.subscribe(data => {
      this.hideDefaultHeader = data;
    });
  }

  ngOnInit() {
    console.log('hideDefaultHeader 34 => ', this.hideDefaultHeader);
  }
}
