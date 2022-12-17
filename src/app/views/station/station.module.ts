import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StationRoutingModule } from './station-routing.module';
import { StationComponent } from './station/station.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    StationComponent
  ],
  imports: [
    CommonModule,
    StationRoutingModule, 
    HttpClientModule
  ]
})
export class StationModule { }
