import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Users } from "../models/user.model";
import { GLOBAL} from "../services/global.service";


@Injectable()
export class ClientService{
    public url: string;
    public token;
    public identity;

    constructor(
        public _http: HttpClient
    )
    {
        this.url = GLOBAL.url;
    }

    updateClient(client: Users): Observable<any>{
        let params = JSON.stringify(client);
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this._http.put(this.url + 'update-client/' + client._id, params, {headers: headers});
    }
    
    getIdentity(){
        console.log("Identity del cliente :v?")
        var identity = JSON.parse(localStorage.getItem('identity-client'));
        if(identity != "undefined"){
            this.identity = identity;
        }else{
            this.identity = null;
        }
        return this.identity;
    }

}