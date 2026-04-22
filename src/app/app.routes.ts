import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Gallery } from './pages/gallery/gallery';
import { Reservation } from './pages/reservation/reservation';
import { Contacts } from './pages/contacts/contacts';


export const routes: Routes = [
  { path: '', component: Home, pathMatch: 'full'},         
  { path: 'gallery', component: Gallery }, 
  { path: 'reservation', component: Reservation },
  { path: 'contacts', component: Contacts } 
];
