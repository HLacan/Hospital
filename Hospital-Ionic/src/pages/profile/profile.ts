import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { LoginService } from "../../services/login.service";
import { GLOBAL } from '../../services/global.service';
import { Clients } from '../../models/client.model';
import { ClientService } from '../../services/client.service';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
  providers: [LoginService, ClientService]
})
export class ProfilePage {

  public identity;
  public url: string;
  public client: Clients;
  public token;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public _loginService: LoginService,
    public _clientService: ClientService,
  ) {
    this.client = this._clientService.getIdentity();
    this.identity = this.client;
    this.token = this._loginService.getIdentityClient();
    this.url = GLOBAL.url;
  }

  ionViewDidLoad() {
    console.log(this.identity);
  }

}
