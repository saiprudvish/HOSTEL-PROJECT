import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotComponent } from './forgot/forgot.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'forgotpass',component:ForgotComponent},
  { path: 'newadmin', loadChildren: () => import('./newadmin/newadmin.module').then(m => m.NewadminModule) },

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
