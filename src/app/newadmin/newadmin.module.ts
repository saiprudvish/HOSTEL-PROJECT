import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewadminRoutingModule } from './newadmin-routing.module';
import { NewadminComponent } from './newadmin.component';
import { StudentdataComponent } from './studentdata/studentdata.component';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [
    NewadminComponent,
    StudentdataComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    NewadminRoutingModule
  ]
})
export class NewadminModule { }
