import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InComponent } from './in/in.component';
import { OutComponent } from './out/out.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NewadminComponent } from './newadmin.component';
import { StudentdataComponent } from './studentdata/studentdata.component';

const routes: Routes = [{ path: '', component: NewadminComponent ,children:[
  {path:'data',component:StudentdataComponent},
  {path:'dashboard',component:DashboardComponent,children:[
    {path:'in',component:InComponent},
    {path:'out',component:OutComponent}
  ]}
]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewadminRoutingModule { }
