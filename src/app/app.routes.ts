import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Gallery } from './pages/gallery/gallery';

export const routes: Routes = [
  { path: '', component: Home, pathMatch: 'full'},          // /
  { path: 'gallery', component: Gallery } // /gallery
];
