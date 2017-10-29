import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AlertModule } from 'ngx-bootstrap';
import { HomeComponent } from './home/home.component';
import { routing  } from './app.routes';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CarouselModule } from 'ngx-bootstrap';
import { AccordionModule } from 'ngx-bootstrap';
import { ApiService } from './ApiService';
import { SetCounter } from './SetCount';
import {BusyModule} from 'angular2-busy';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SweetAlertService } from 'ng2-sweetalert2';
import { SanitizeHtml, SanitizeResourceUrl, SanitizeScript, SanitizeStyle, SanitizeUrl } from 'ng2-sanitize';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SanitizeHtml,
    SetCounter
  ],
  imports: [
    BrowserModule,
    AlertModule.forRoot(),
    CarouselModule.forRoot(),
    AccordionModule.forRoot(),
    routing,
    HttpModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule ,
    BusyModule
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy},ApiService ,SweetAlertService],
  bootstrap: [AppComponent]
})
export class AppModule { }
