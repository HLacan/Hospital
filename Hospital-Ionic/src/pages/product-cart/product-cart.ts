import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProductPage } from '../product/product';
import { CartPage } from '../cart/cart';

/**
 * Generated class for the ProductCartPage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-product-cart',
  templateUrl: 'product-cart.html'
})
export class ProductCartPage {

  productRoot = ProductPage
  cartRoot = CartPage


  constructor(public navCtrl: NavController) {}

}
