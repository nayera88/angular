import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor( private http:HttpClient) { }
  private url ='https://tools-git-tripproject.apps.eu410.prod.nextcle.com/';

  SignUp(user:any){
    return this.http.post(this.url + 'api/admin/signUp' , user);
  }

  AddTrip(trip:any){
    return this.http.post(this.url + 'api/trip/add' , trip);
  }

  ShowStations(){
    return this.http.get(this.url+ 'api/station')
  }

  ShowTrips(){
    return this.http.get(this.url+ 'api/trip')
  }

  Delete(id:any){
    return this.http.delete(this.url+'api/trip/delete/'+id)

  }

   getTrip(id:any){
    return this.http.get(this.url+'api/trip/all/'+id)

  }

 Update(id:any, trip:any){
    return this.http.put(this.url+'api/trip/update/'+id, trip)
  
}
SignIn(admin:any){
  return this.http.post(this.url + 'admin/signIN' , admin);
}
}
