import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InComponent } from './in/in.component';
import { OutComponent } from './out/out.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NewadminComponent } from './newadmin.component';
import { StudentdataComponent } from './studentdata/studentdata.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { DaterangedetailsComponent } from './daterangedetails/daterangedetails.component';

const routes: Routes = [{ path: '', component: NewadminComponent ,children:[
  { path: '', component: DashboardComponent},
  {path:'data',component:StudentdataComponent},
  {path:'data/:bid',component:UserdetailsComponent},
  {path:'in',component:InComponent},
  {path:'data',component:StudentdataComponent},
  {path:'data/:bid',component:UserdetailsComponent},
  {path:'range',component:DaterangedetailsComponent},
  {path:'range/:bid',component:UserdetailsComponent},
  {path:'out',component:OutComponent},
  {path:'in/:bid',component:UserdetailsComponent},
  {path:'out/:bid',component:UserdetailsComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'dashboard',component:DashboardComponent,children:[
    {path:'in',component:InComponent},
    {path:'data',component:StudentdataComponent},
    {path:'data/:bid',component:UserdetailsComponent},
    {path:'range',component:DaterangedetailsComponent},
    {path:'range/:bid',component:UserdetailsComponent},
    {path:'out',component:OutComponent},
    {path:'in/:bid',component:UserdetailsComponent},
    {path:'out/:bid',component:UserdetailsComponent}
  ]},

]},


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewadminRoutingModule { }
