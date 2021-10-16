import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Dates } from "../models/date.model";
import { GLOBAL} from "../services/global.service";


@Injectable()
export class DateService{
    public url: string;
    public token;
    public identity;

    constructor(
        public _http: HttpClient
    )
    {
        this.url = GLOBAL.url;
    }

    getDate(id){   
        return this._http.get(this.url + 'date/' + id);
    }

    getAllDates(){
        return this._http.get(this.url +'dates');
    }

    addDate(date: Dates): Observable<any>{
        let params = JSON.stringify(date);
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this._http.post(this.url+'add-date', params, {headers: headers});
    }

    updateDate(date: Dates): Observable<any>{
        let params = JSON.stringify(date);
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this._http.put(this.url + 'update-date/' + date._id, params, {headers: headers});
    }

    deleteDate(dateID: Dates): Observable<any>{
        let params = JSON.stringify(dateID);
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this._http.delete(this.url + 'delete-date/' + dateID, {headers: headers});
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