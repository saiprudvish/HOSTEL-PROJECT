import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InComponent } from './in/in.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {path:'',component:LoginComponent},
  { path: 'newadmin', loadChildren: () => import('./newadmin/newadmin.module').then(m => m.NewadminModule) },

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
