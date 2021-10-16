import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { GLOBAL} from "../services/global.service";


@Injectable()
export class ClinicService{
    public url: string;

    constructor(
        public _http: HttpClient
    )
    {
        this.url = GLOBAL.url;
    }

    getAllClinics(){
        return this._http.get(this.url +'clinics');
    }
}