import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { HomePageComponent } from './components/home-page/home-page.component';
import { AdminStartComponent } from './components/admin-start/admin-start.component';
import { DoctorStartComponent } from './components/doctor-start/doctor-start.component';
import { SecretaryStartComponent } from './components/secretary-start/secretary-start.component';
import { ClientStartComponent } from './components/client-start/client-start.component';
import { AdminComponent } from './components/admin/admin.component';
import { BillComponent } from './components/bill/bill.component';
import { BillDetailComponent } from './components/bill-detail/bill-detail.component';
import { ClientComponent } from './components/client/client.component';
import { DateComponent } from './components/date/date.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ServicesComponent } from './components/services/services.component';
import { SecretariesComponent } from './components/secretaries/secretaries.component';
import { ClinicComponent } from "./components/clinic/clinic.component";
import { SpecialitiesComponent } from "./components/speciality/speciality.component";
import { DoctorComponent } from "./components/doctor/doctor.component";
import { ProfileComponent } from "./components/profile/profile.component";
import { ProductsComponent } from "./components/products/products.component";
import { ProductClientComponent } from "./components/product-client/product-client.component";


const appRoutes: Routes = [
    { path: '', component: HomePageComponent },
    { path: '', redirectTo: 'home-page', pathMatch: 'full' },
    { path: 'home-page', component: HomePageComponent },
    { path: 'doctors', component: DoctorComponent },
    { path: 'admin-start', component: AdminStartComponent },
    { path: 'doctor-start', component: DoctorStartComponent },
    { path: 'secretaries', component: SecretariesComponent },
    { path: 'secretary-start', component: SecretaryStartComponent },
    { path: 'client-start', component: ClientStartComponent },
    { path: 'admin', component: AdminComponent },
    { path: 'client', component: ClientComponent },
    { path: 'clinic', component: ClinicComponent },
    { path: 'bills', component: BillComponent },
    { path: 'billDetail', component: BillDetailComponent },
    { path: 'dates', component: DateComponent },
    { path: 'about-us', component: AboutUsComponent },
    { path: 'services', component: ServicesComponent },
    { path: 'specialty', component: SpecialitiesComponent },
    { path: 'profile', component: ProfileComponent },
    { path: 'products', component: ProductsComponent },
    { path: 'product-client', component: ProductClientComponent },
    { path: '**', component: HomePageComponent }

];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);