import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// this part is related highcharts=>(npm install highcharts-angular)
import { HighchartsChartModule } from 'highcharts-angular';

//this part is related getting data from json file which is on web
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HighchartsChartModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
