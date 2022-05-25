import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { NgApexchartsModule } from "ng-apexcharts";
import { ForgotComponent } from './forgot/forgot.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ForgotComponent
  ],
  imports: [
    BrowserModule,
    NgxPaginationModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgApexchartsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
