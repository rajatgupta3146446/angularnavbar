import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NavBardetailsComponent } from './nav-bar/nav-bardetails/nav-bardetails.component';
import { NavBardecComponent } from './nav-bar/nav-bardec/nav-bardec.component';
import { ColorchangeDirective } from './colorchange.directive';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    NavBardetailsComponent,
    NavBardecComponent,
    ColorchangeDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
