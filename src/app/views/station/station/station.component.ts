import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-station',
  templateUrl: './station.component.html',
  styleUrls: ['./station.component.css']
})
export class StationComponent implements OnInit {

  stations:any;

  ShowStation(){
   this.Service.ShowStations().subscribe(response=>{console.log(response);this.stations=response;},error=>{console.log(error);} );
     
   
  }
  constructor(public Service:ServiceService) { }

  ngOnInit(): void {
  }

}
