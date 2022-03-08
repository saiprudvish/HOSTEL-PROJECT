import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewadminRoutingModule } from './newadmin-routing.module';
import { NewadminComponent } from './newadmin.component';
import { StudentdataComponent } from './studentdata/studentdata.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InComponent } from './in/in.component';
import { OutComponent } from './out/out.component';


@NgModule({
  declarations: [
    NewadminComponent,
    StudentdataComponent,
    DashboardComponent,
    InComponent,
    OutComponent
  ],
  imports: [
    CommonModule,
    NewadminRoutingModule
  ]
})
export class NewadminModule { }
