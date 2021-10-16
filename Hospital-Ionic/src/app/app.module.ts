import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { EmailComposer } from '@ionic-native/email-composer';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { ClientStartPage } from '../pages/client-start/client-start';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ContactUsPage } from '../pages/contact-us/contact-us';
import { ProfilePage } from '../pages/profile/profile';
import { UbicationPage } from '../pages/ubication/ubication';
import { ProductPage } from '../pages/product/product';
import { ProductCartPage } from '../pages/product-cart/product-cart';
import { CartPage } from '../pages/cart/cart';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    RegisterPage,
    ClientStartPage,
    ContactUsPage,
    ProfilePage,
    UbicationPage,
    ProductPage,
    ProductCartPage,
    CartPage
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    RegisterPage,
    ClientStartPage,
    ContactUsPage,
    ProfilePage,
    UbicationPage,
    ProductPage,
    ProductCartPage,
    CartPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    EmailComposer,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
