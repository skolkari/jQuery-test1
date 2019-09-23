import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SampleOneComponent } from './sample-one/sample-one.component';
import { SampleTwoComponent } from './sample-two/sample-two.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NavHeaderComponent } from './nav-header/nav-header.component';
import { NavFooterComponent } from './nav-footer/nav-footer.component';
import { AppService } from './app.service';
import { HomeComponent } from './home/home.component';
import { SampleThreeComponent } from './sample-three/sample-three.component';
import { Router } from '@angular/router';
import { SampleFourComponent } from './sample-four/sample-four.component';

@NgModule({
  declarations: [
    AppComponent,
    SampleOneComponent,
    SampleTwoComponent,
    SampleThreeComponent,
    PageNotFoundComponent,
    NavHeaderComponent,
    NavFooterComponent,
    HomeComponent,
    SampleFourComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
