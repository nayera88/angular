import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TripRoutingModule } from './trip-routing.module';
import { TripComponent } from './trip/trip.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    TripComponent,
    
  ],
  imports: [
    CommonModule,
    TripRoutingModule,
    FormsModule,
    HttpClientModule
  ]
})
export class TripModule { }
