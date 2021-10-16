import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { BillDetails } from "../models/billDetail.model";
import { GLOBAL} from "../services/global.service";


@Injectable()
export class BillDetailService{
    public url: string;
    public token;
    public identity;

    constructor(
        public _http: HttpClient
    )
    {
        this.url = GLOBAL.url;
    }

    getBillDetail(id){   
        return this._http.get(this.url + 'bill_detail/' + id);
    }

    getAllBillDetails(){
        return this._http.get(this.url +'bill_details');
    }

    addBillDetail(billDetail: BillDetails): Observable<any>{
        let params = JSON.stringify(billDetail);
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this._http.post(this.url+'add-bill_detail', params, {headers: headers});
    }

    updateBillDetail(billDetail: BillDetails): Observable<any>{
        let params = JSON.stringify(billDetail);
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this._http.put(this.url + 'update-bill_detail/' + billDetail._id, params, {headers: headers});
    }

    deleteBillDetail(billDetailID: BillDetails): Observable<any>{
        let params = JSON.stringify(billDetailID);
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this._http.delete(this.url + 'delete-bill_detail/' + billDetailID, {headers: headers});
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