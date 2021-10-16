import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Specialities } from "../models/speciality.model";
import { GLOBAL } from "../services/global.service";

@Injectable()
export class SpecialitiesService {
    public url: string;

    constructor(
        public _http: HttpClient
    ) {
        this.url = GLOBAL.url;
    }

    getSpecialities() {
        return this._http.get(this.url + 'specialties');
    }

    getSpeciality(id) {
        return this._http.get(this.url + 'specialty/' + id)
    }

    getFilter(id) {
        return this._http.get(this.url + 'get-filter-specialities/' + id);
    }

    addSpeciality(speciality: Specialities): Observable<any> {
        let params = JSON.stringify(speciality);
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this._http.post(this.url + 'add-specialty', params, { headers: headers });
    }

    updateSpeciality(speciality: Specialities): Observable<any> {
        let params = JSON.stringify(speciality);
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this._http.put(this.url + 'update-specialty/' + speciality._id, params, { headers: headers });
    }

    deleteSpeciality(specialityID): Observable<any> {
        let params = JSON.stringify(specialityID);
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this._http.delete(this.url + 'delete-specialty/' + specialityID, { headers: headers });
    }
}