import { RouterModule, Routes, Router } from '@angular/router';
import { NgModule } from '@angular/core';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SampleOneComponent } from './sample-one/sample-one.component';
import { SampleTwoComponent } from './sample-two/sample-two.component';
import { HomeComponent } from './home/home.component';
import { SampleThreeComponent } from './sample-three/sample-three.component';
import { SampleFourComponent } from './sample-four/sample-four.component';

const appRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'sample1', component: SampleOneComponent },
    { path: 'sample2', component: SampleTwoComponent },
    { path: 'sample3', component: SampleThreeComponent },
    { path: 'sample4', component: SampleFourComponent },
    { 
         path: '',
         redirectTo: 'home',
         pathMatch: 'full' 
    },
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes, { useHash: true })],
    exports: [RouterModule]
})
export class AppRoutingModule {
    
}
