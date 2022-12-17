import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './layout/home/home.component';
import { UserComponent } from './layout/user/user.component';


const routes: Routes = [
  {path:'user',component:UserComponent,
  children:[
 
  {path: '',loadChildren:()=>import('./views/trip/trip.module').then(m=>m.TripModule)},
  {path: 'station',loadChildren:()=>import('./views/station/station.module').then(m=>m.StationModule)},
  ]
},
  {path:'',component:HomeComponent,
  children:[
    {path: '',loadChildren:()=>import('./views/sign-in/sign-in.module').then(m=>m.SignInModule)},
    {path:' SignUp' , loadChildren:()=>import('./views/sign-up/sign-up.module').then(m=>m.SignUpModule)},
    ]},

    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
