import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { routing, appRoutingProviders } from "./app.routing";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { CommonModule } from '@angular/common';

import { HomePageComponent } from './components/home-page/home-page.component';
import { ClientStartComponent } from './components/client-start/client-start.component';
import { AdminStartComponent } from './components/admin-start/admin-start.component';
import { SecretaryStartComponent } from './components/secretary-start/secretary-start.component';
import { DoctorStartComponent } from './components/doctor-start/doctor-start.component';
import { AdminComponent } from './components/admin/admin.component';
import { BillComponent } from './components/bill/bill.component';
import { BillDetailComponent } from './components/bill-detail/bill-detail.component';
import { ClientComponent } from './components/client/client.component';
import { DateComponent } from './components/date/date.component';
import { DoctorComponent } from './components/doctor/doctor.component';
import { ProductsComponent } from './components/products/products.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ServicesComponent } from './components/services/services.component';
import { SecretariesComponent } from './components/secretaries/secretaries.component';
import { ClinicComponent } from './components/clinic/clinic.component';
import { SpecialitiesComponent } from './components/speciality/speciality.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ProductClientComponent } from './components/product-client/product-client.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ClientStartComponent,
    AdminStartComponent,
    SecretaryStartComponent,
    DoctorStartComponent,
    AdminComponent,
    BillComponent,
    BillDetailComponent,
    ClientComponent,
    DateComponent,
    DoctorComponent,
    ProductsComponent,
    AboutUsComponent,
    ServicesComponent,
    SecretariesComponent,
    ClinicComponent,
    SpecialitiesComponent,
    ProfileComponent,
    ProductClientComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    routing,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right'
    }),
  ],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
