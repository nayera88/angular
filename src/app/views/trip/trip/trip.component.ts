import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-trip',
  templateUrl: './trip.component.html',
  styleUrls: ['./trip.component.css']
})
export class TripComponent implements OnInit {
  

  trip={
    
     id:"",
     startTime:"",
     endTime:"",
    fromStation:"",
    toStation:""
  }

   trips:any;
   Add(){
    this.Service.AddTrip(this.trip)
    .subscribe(responce=>{console.log(responce); },
     error=>{console.log(error); });}

    ShowTrips(){
      this.Service.ShowTrips().subscribe(response=>{console.log(response);this.trips=response;},
      error=>{console.log(error);} );
        
     }

     Delete(id:any) {
      this.Service.Delete(id).subscribe(response=>{console.log(response);this.trips=response; this.ngOnInit()},
      error=>{console.log(error);} );

    }
  
    
    Update(id:any, trip:any) {
      this.Service.Update(id,trip).subscribe(response=>{console.log(response);this.trips=response; },
      error=>{console.log(error);} );

    }

     getTrip(id:any) {
      this.Service.getTrip(id).subscribe(response=>{console.log(response);this.trips=response; },
      error=>{console.log(error);} );
    }

  constructor(public Service:ServiceService) { }

  ngOnInit(): void {
  }

}
