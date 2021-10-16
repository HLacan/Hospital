import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Bills } from "../models/bill.model";
import { GLOBAL} from "../services/global.service";

@Injectable()
export class BillService{
    public url: string;
    public token;
    public identity;

    constructor(
        public _http: HttpClient
    )
    {
        this.url = GLOBAL.url;
    }

    getBill(id){   
        return this._http.get(this.url + 'bill/' + id);
    }

    getAllBills(){
        return this._http.get(this.url +'bills');
    }

    addBill(bill: Bills): Observable<any>{
        let params = JSON.stringify(bill);
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this._http.post(this.url+'add-bill', params, {headers: headers});
    }

    updateBill(bill: Bills): Observable<any>{
        let params = JSON.stringify(bill);
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this._http.put(this.url + 'update-bill/' + bill._id, params, {headers: headers});
    }

    deleteBill(billID: Bills): Observable<any>{
        let params = JSON.stringify(billID);
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this._http.delete(this.url + 'delete-bill/' + billID, {headers: headers});
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