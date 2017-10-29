import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';



export const routes: Routes = [
  
 
   

   
   { path: 'home', component: HomeComponent} ,
  
    { path: '',   redirectTo: 'home', pathMatch: 'full' }
  

   
   
    
 

  
];

// Deprecated provide
// export const APP_ROUTER_PROVIDERS = [
//   provideRouter(routes)
// ];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);