import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Clinics } from "../models/clinic.model";
import { GLOBAL} from "../services/global.service";


@Injectable()
export class ClinicService{
    public url: string;

    constructor(
        public _http: HttpClient
    )
    {
        this.url = GLOBAL.url;
    }

    getClinic(id){   
        return this._http.get(this.url + 'clinic/' + id);
    }

    getAllClinics(){
        return this._http.get(this.url +'clinics');
    }

    addClinic(clinic: Clinics): Observable<any>{
        let params = JSON.stringify(clinic);
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this._http.post(this.url+'add-clinic', params, {headers: headers});
    }

    updateClinic(clinic: Clinics): Observable<any>{
        let params = JSON.stringify(clinic);
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this._http.put(this.url + 'update-clinic/' + clinic._id, params, {headers: headers});
    }

    deleteClinic(clinicID: Clinics): Observable<any>{
        let params = JSON.stringify(clinicID);
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this._http.delete(this.url + 'delete-clinic/' + clinicID, {headers: headers});
    }
}