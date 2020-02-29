import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { PlacegiftcardsComponent } from './placegiftcards/placegiftcards.component';
import {ReactiveFormsModule} from '@angular/forms';
import { ViewgiftcardsComponent } from './viewgiftcards/viewgiftcards.component';
import { UpdateGiftcardsComponent } from './update-giftcards/update-giftcards.component'

@NgModule({
  declarations: [
    AppComponent,
    PlacegiftcardsComponent,
    ViewgiftcardsComponent,
    UpdateGiftcardsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
