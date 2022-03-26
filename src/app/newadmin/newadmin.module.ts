import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewadminRoutingModule } from './newadmin-routing.module';
import { NewadminComponent } from './newadmin.component';
import { StudentdataComponent } from './studentdata/studentdata.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InComponent } from './in/in.component';
import { OutComponent } from './out/out.component';
import { SearchPipe } from './search.pipe';
import { FormsModule } from '@angular/forms';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { DaterangedetailsComponent } from './daterangedetails/daterangedetails.component';

@NgModule({
  declarations: [
    NewadminComponent,
    StudentdataComponent,
    DashboardComponent,
    InComponent,
    OutComponent,
    SearchPipe,
    UserdetailsComponent,
    DaterangedetailsComponent
  ],
  imports: [
    CommonModule,
    NgxPaginationModule,
    FormsModule,
    NewadminRoutingModule
  ]
})
export class NewadminModule { }
