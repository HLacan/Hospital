import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Users } from '../../models/user.model';
import { LoginService } from '../../services/login.service';
import { ToastController } from 'ionic-angular';

import { ClientStartPage } from '../../pages/client-start/client-start';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  providers: [LoginService]
})

export class LoginPage {

  public user: Users;
  public token;
  public identity_Client;
  public status: string;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private _loginService: LoginService,
    public toastCtrl: ToastController
  ) {
    this.user = new Users("", "", "", "", "", "", "", "", "", "", "", "");
  }

  clientStart(){
    this.navCtrl.push(ClientStartPage);
  }

  Login() {
    this._loginService.LoginGeneral(this.user).subscribe(response => {
      this.identity_Client = response.client;
      console.log(this.identity_Client);
      if (!this.identity_Client) {
        this.status = 'error'
      } else {
        this.status = 'success';
        localStorage.setItem('identity-client', JSON.stringify(this.identity_Client));
        this.getTokenClient();
        console.log("este usuario se ha logueado! :D")
        this.clientStart();
      }
    },
      error => {
        var errorMessage = <any>error;
        console.log(errorMessage);
        if (errorMessage != null) {
          console.log("nel prro :'v")
          this.status = 'error';
          this.loginErr();
        }
      }
    )
  }

  getTokenClient() {
    this._loginService.LoginGeneral(this.user, 'true').subscribe(response => {
      this.token = response.token;
      console.log(this.token);
      if (this.token <= 0) {
        this.status = 'error';
      } else {
        localStorage.setItem('token-client', this.token);
      }
    },
      error => {
        var errorMessage = <any>error;
        console.log(errorMessage);
        if (errorMessage != null) {
          this.status = 'error';
        }
      }
    );
  }

  loginErr() {
    const toast = this.toastCtrl.create({
      message: 'Usuario o Contrasena Incorrectos',
      duration: 3000
    });
    toast.present();
  }


}
