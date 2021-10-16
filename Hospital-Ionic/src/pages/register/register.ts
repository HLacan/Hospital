import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { RegisterService } from '../../services/register.service';
import { Users } from '../../models/user.model';

@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
  providers: [RegisterService]
})
export class RegisterPage {

  public user: Users;
  public status: string;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public toastCtrl: ToastController,
    public _registerService: RegisterService
  ) {
    this.user = new Users("", "", "", "", "", "", "", "", "", "", "", "");
  }

  Register() {
    this._registerService.register(this.user).subscribe(
      response => {
        if (response) {
          console.log(response.user);
          this.status = 'success';
        }
      },
      error => {
        console.log(<any>error);
        this.status = 'error';
      }
    )
  }

  confirm() {
    const alert = this.alertCtrl.create({
      title: 'Terminando',
      subTitle: 'Al registrarte aceptas nuestro terminos y condiciones.',
      buttons: [
        {
          text: 'Cancelar',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Ok',
          handler: () => {
            this.Register();
            this.registerToast();
          }
        }
      ]      
    });
    alert.present();
  }

  registerToast() {
    const toast = this.toastCtrl.create({
      message: 'Cuenta Creada! Ingresa ahora :)',
      duration: 3000
    });
    toast.present();
  }

}
