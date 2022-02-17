import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { StudentinfoComponent } from './studentinfo/studentinfo.component';

const routes: Routes = [{ path: '', component: AdminComponent},
  {path:'info',component:StudentinfoComponent},
  {path:'dashboard',component:StudentinfoComponent}
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
