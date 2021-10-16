import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Secretaries } from "../models/secretary.model";
import { GLOBAL } from "../services/global.service";

@Injectable()
export class SecretariesService {
    public url: string;

    constructor(
        public _http: HttpClient
    ) {
        this.url = GLOBAL.url;
    }

    getSecretaries() {
        return this._http.get(this.url + 'secretaries');
    }

    getSecretary(id) {
        return this._http.get(this.url + 'secretary/' + id)
    }

    getFilter(id) {
        return this._http.get(this.url + 'get-filter-secretaries/' + id);
    }

    addSecretary(secretary: Secretaries): Observable<any> {
        let params = JSON.stringify(secretary);
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this._http.post(this.url + 'add-secretary', params, { headers: headers });
    }

    updateSecretary(secretary: Secretaries): Observable<any> {
        let params = JSON.stringify(secretary);
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this._http.put(this.url + 'update-secretary/' + secretary._id, params, { headers: headers });
    }

    deleteSecretary(secretaryID): Observable<any> {
        let params = JSON.stringify(secretaryID);
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this._http.delete(this.url + 'delete-secretary/' + secretaryID, { headers: headers });
    }
}