import { Component } from '@angular/core';
import { NavController, NavParams, AlertController} from 'ionic-angular';
import { ContactUsPage } from '../contact-us/contact-us';
import { LoginService } from "../../services/login.service";
import { HomePage } from '../home/home';
import { ProfilePage } from '../profile/profile';
import { UbicationPage } from '../ubication/ubication';
import { ProductCartPage } from '../product-cart/product-cart';

@Component({
  selector: 'page-client-start',
  templateUrl: 'client-start.html',
  providers: [LoginService]
})

export class ClientStartPage {

  public identity;

  constructor(
    public navCtrl: NavController,
    public alertCtrl: AlertController,
    public navParams: NavParams,
    public _loginService: LoginService,
  ) {
    this.identity = _loginService.getIdentityClient();
  }

  about(){
    this.navCtrl.push(ContactUsPage);
  }

  profile(){
    this.navCtrl.push(ProfilePage);
  }

  ubication(){
    this.navCtrl.push(UbicationPage);
  }

  product(){
    this.navCtrl.push(ProductCartPage);
  }

  LogOut() {
    localStorage.clear();
    this.identity = null;
    this.navCtrl.push(HomePage);
  }

  confirm() {
    const alert = this.alertCtrl.create({
      title: 'Sesion',
      subTitle: 'Desea cerrar la sesion actual?',
      buttons: [
        {
          text: 'No',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Si',
          handler: () => {
            this.LogOut();
          }
        }
      ]      
    });
    alert.present();
  }


}
