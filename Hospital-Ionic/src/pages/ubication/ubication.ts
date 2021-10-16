import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ClinicService } from '../../services/clinic.service';

@Component({
  selector: 'page-ubication',
  templateUrl: 'ubication.html',
  providers: [ClinicService]
})
export class UbicationPage {

  public listClinic

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public _clinicService: ClinicService
  ) {
  }

  getAllClinics() {
    this._clinicService.getAllClinics().subscribe(response => {
      this.listClinic = response;
      console.log(this.listClinic);
    });
  }

  ionViewDidLoad() {
    this.getAllClinics();
  }

  

}
