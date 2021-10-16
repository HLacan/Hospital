import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Doctors } from "../models/doctor.model";
import { GLOBAL } from "../services/global.service";

@Injectable()
export class DoctorsService {
    public url: string;

    constructor(
        public _http: HttpClient
    ) {
        this.url = GLOBAL.url;
    }

    getDoctors() {
        return this._http.get(this.url + 'doctors');
    }

    getDoctor(id) {
        return this._http.get(this.url + 'doctor/' + id)
    }

    getFilter(id) {
        return this._http.get(this.url + 'get-filter-doctors/' + id);
    }

    addDoctor(doctor: Doctors): Observable<any> {
        let params = JSON.stringify(doctor);
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this._http.post(this.url + 'add-doctor', params, { headers: headers });
    }

    updateDoctor(doctor: Doctors): Observable<any> {
        let params = JSON.stringify(doctor);
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this._http.put(this.url + 'update-doctor/' + doctor._id, params, { headers: headers });
    }

    deleteDoctor(doctorID): Observable<any> {
        let params = JSON.stringify(doctorID);
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this._http.delete(this.url + 'delete-doctor/' + doctorID, { headers: headers });
    }
}