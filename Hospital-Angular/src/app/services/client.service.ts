import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Clients } from "../models/client.model";
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

    getClient(id){   
        return this._http.get(this.url + 'client/' + id);
    }

    getAllClients(){
        return this._http.get(this.url +'clients');
    }

    addClient(client: Clients): Observable<any>{
        let params = JSON.stringify(client);
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this._http.post(this.url+'add-client', params, {headers: headers});
    }

    updateClient(client: Clients): Observable<any>{
        let params = JSON.stringify(client);
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this._http.put(this.url + 'update-client/' + client._id, params, {headers: headers});
    }

    deleteClient(clientID: Clients): Observable<any>{
        let params = JSON.stringify(clientID);
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this._http.delete(this.url + 'delete-client/' + clientID, {headers: headers});
    }
    
    getIdentity(){
        console.log("Identity del cliente :v?")
        var identity_Client = JSON.parse(localStorage.getItem('identity-client'));
        if(identity_Client != "undefined"){
            this.identity = identity_Client;
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