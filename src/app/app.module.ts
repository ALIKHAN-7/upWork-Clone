import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { UpworkComponent } from './upwork/upwork.component';
import { FooterComponent } from './footer/footer.component';
import { Header2Component } from './header2/header2.component';
import { JoinComponent } from './join/join.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SignupComponent } from './signup/signup.component';
import { EnterprisesComponent } from './enterprises/enterprises.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UpworkComponent,
    FooterComponent,
    Header2Component,
    JoinComponent,
    DashboardComponent,
    SignupComponent,
    EnterprisesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
