import { Routes } from '@angular/router';
import { SinglePageComponent } from './single-page/single-page.component';
import { HomePageComponent } from './home-page/home-page.component';

export const routes: Routes = [
   {path: '', component: HomePageComponent},
   {path: 'album/:id', component: SinglePageComponent}
]
