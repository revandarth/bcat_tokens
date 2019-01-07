import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EthcontractService } from './ethcontract.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [EthcontractService],
  bootstrap: [AppComponent]
})
export class AppModule { }
