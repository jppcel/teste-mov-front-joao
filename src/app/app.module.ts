import { SliderHelperComponent } from './_helper/slider-helper/slider-helper.component';
import { VehicleComponent } from './pages/vehicle/vehicle.component';
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';

// **************************************************
import ptBr from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';

registerLocaleData(ptBr);
// **************************************************

@NgModule({
  declarations: [
    AppComponent,
    VehicleComponent,
    SliderHelperComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule,
    HttpClientModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt' },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
