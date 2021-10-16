import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GLOBAL } from '../services/global.service';

@Injectable()
export class LoginService{
    public url: string;
    public token_Admin: string;
    public token_Doctor: string;
    public token_Secretary: string;
    public token_Client: string;
    public identity_Admin: string;
    public identity_Doctor: string;
    public identity_Secretary: string;
    public identity_Client: string

    constructor(
        public _http: HttpClient
    ){
        this.url = GLOBAL.url;
    }

    //Login General
    LoginGeneral(admin, getToken = null): Observable<any>{
        if(getToken != null) {
            admin.getToken = getToken;
        }
        let params = JSON.stringify(admin);
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this._http.post(this.url + 'login', params, {headers: headers});
    }

    //Identitys

    //identity de admin
    getIdentityAdmin(){
        var identity = JSON.parse(localStorage.getItem('identity-admin'));
        if (identity != "undefined"){
            this.identity_Admin = identity;
        } else {
            this.identity_Admin = null;
        }
        return this.identity_Admin
    }

    //identity del doctor
    getIdentityDoctor() {
        var identity = JSON.parse(localStorage.getItem('identity-doctor'));
        if (identity != "undefined") {
            this.identity_Doctor = identity;
        } else {
            this.identity_Doctor = null;
        }
        return this.identity_Doctor;
    }

    //identity de la secretaria
    getIdentitySecretary(){
        var identity = JSON.parse(localStorage.getItem('identity-secretary'));
        if(identity != "undefined"){
            this.identity_Secretary = identity;
        } else {
            this.identity_Secretary = null;
        }
        return this.identity_Secretary;
    }

    //identity del cliente
    getIdentityClient(){
        var identity = JSON.parse(localStorage.getItem('identity-client'));
        if(identity != "undefined"){
            this.identity_Client = identity;
        } else {
            this.identity_Client = null;
        }
        return this.identity_Client;
    }

    //Tokens

    //Token Admin
    getTokenAdmin(){
        let token = localStorage.getItem('token-admin');
        if(token != "undefined"){
            this.token_Admin = token;
        } else {
            this.token_Admin = null;
        }
        return this.token_Admin
    }

    //token doctor
    getTokenDoctor() {
        let token = localStorage.getItem('token-doctor');
        if (token != "undefined") {
            this.token_Doctor = token;
        } else {
            this.token_Doctor = null;
        }
        return this.token_Doctor
    }

    //token secretaria
    getTokenSecretary(){
        let token = localStorage.getItem('token-secretary');
        if(token != "undefined"){
            this.token_Secretary = token;
        } else {
            this.token_Secretary = null;
        }
        return this.token_Secretary;
    }

    //token cliente
    getTokenClient(){
         let token = localStorage.getItem('token-client');
         if(token != "undefined"){
            this.token_Client = token;
         } else {
            this.token_Client = null;
         }
         return this.token_Client;
      }
}