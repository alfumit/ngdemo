import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { PipesModule } from './shared/pipes/pipes.module';
import { TemperaturModule } from './temperatur/temperatur.module';

import { AppComponent } from './app.component';
import { TeddyBearComponent } from './teddy-bear/teddy-bear.component';
import { ElementLeftComponent } from './element-left/element-left.component';
import { ActivityRowComponent } from './element-left/activity-row/activity-row.component';
import { HttpModule } from '@angular/http';
import { MoscowApiService } from './shared/services/moscow-api.service';


@NgModule({
  declarations: [
    AppComponent,
    TeddyBearComponent,
    ElementLeftComponent,
    ActivityRowComponent,
  ],
  imports: [
    BrowserModule,
    TemperaturModule,
    PipesModule,
    HttpModule
  ],
  providers:[
    MoscowApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
