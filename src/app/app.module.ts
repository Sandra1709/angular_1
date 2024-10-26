// src/app/app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DataComponent } from './data/data.component';
import { CartComponent } from './cart/cart.component';
import { HttpComponent } from './http/http.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    DataComponent,
    CartComponent,
    HttpComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],


  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
