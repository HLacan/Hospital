import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GLOBAL } from '../services/global.service';
import { Users } from "../models/user.model";

@Injectable()
export class RegisterService{
    public url: string;

    constructor(
        public _http: HttpClient
    ){
        this.url = GLOBAL.url;
    }

    register(user: Users): Observable<any>{
        let params = JSON.stringify(user);
        let headers =  new HttpHeaders().set('Content-Type', 'application/json');
        return this._http.post(this.url+'add-client', params, {headers: headers});
    }
}