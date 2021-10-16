import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Admins } from "../models/admin.model";
import { GLOBAL} from "../services/global.service";


@Injectable()
export class AdminService{
    public url: string;
    public token;
    public identity;

    constructor(
        public _http: HttpClient
    )
    {
        this.url = GLOBAL.url;
    }

    getAdmin(id){   
        return this._http.get(this.url + 'admin/' + id);
    }

    getAllAdmins(){
        return this._http.get(this.url +'admins');
    }

    addAdmin(admin: Admins): Observable<any>{
        let params = JSON.stringify(admin);
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this._http.post(this.url+'add-admin', params, {headers: headers});
    }

    updateAdmin(admin: Admins): Observable<any>{
        let params = JSON.stringify(admin);
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this._http.put(this.url + 'update-admin/' + admin._id, params, {headers: headers});
    }

    deleteAdmin(adminID: Admins): Observable<any>{
        let params = JSON.stringify(adminID);
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this._http.delete(this.url + 'delete-admin/' + adminID, {headers: headers});
    }
    
    getIdentity(){
        var identity = JSON.parse(localStorage.getItem('identity'));
        if(identity != "undefined"){
            this.identity = identity;
        }else{
            this.identity = null;
        }
        return this.identity;
    }

    getToken(){
        let token = localStorage.getItem('token');
        if(token != "undefined"){
            this.token = token;
        }else{
            this.token = null;
        }
        return this.token;
    }
}