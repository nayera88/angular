import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user={
    id:"",
    name:"",
    username:'',
    email:'',
    password:'',
  }
  SignUp(){
    this.Service.SignUp(this.user).subscribe(response=>{ console.log(response); }, error=>{  console.log(error);});}

  constructor(public Service:ServiceService) { }

  ngOnInit(): void {
  }

}
