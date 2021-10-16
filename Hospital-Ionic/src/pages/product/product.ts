import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { ProductsService } from '../../services/products.service';
import { ContactUsPage } from '../contact-us/contact-us';
import { LoginService } from "../../services/login.service";
import { HomePage } from '../home/home';
import { ProfilePage } from '../profile/profile';
import { UbicationPage } from '../ubication/ubication';
import { ClientStartPage } from '../client-start/client-start';

@Component({
  selector: 'page-product',
  templateUrl: 'product.html',
  providers: [ProductsService, LoginService]
})
export class ProductPage {

  public listProducts;
  public identity

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public _productService: ProductsService,
    public _loginService: LoginService
  ) {
    this.identity = _loginService.getIdentityClient();
  }

  getAllProducts() {
    this._productService.getProducts().subscribe(response => {
      this.listProducts = response;
      console.log(this.listProducts);
    });
  }

  ionViewDidLoad() {
    this.getAllProducts();
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

  home(){
    this.navCtrl.push(ClientStartPage);
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
