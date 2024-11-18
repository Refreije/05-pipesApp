import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ButtonModule } from 'primeng/button';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import  '@angular/common/locales/global/es' ;
import  '@angular/common/locales/global/fr' ;
// import { registerLocaleData } from '@angular/common';
// registerLocaleData
//configuracion del locale de la app
// import {sas}from  '@angular/common/locales/global/es'


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    SharedModule,
    BrowserAnimationsModule
],
  providers: [
    {
      provide: LOCALE_ID, useValue: 'es-ES'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
