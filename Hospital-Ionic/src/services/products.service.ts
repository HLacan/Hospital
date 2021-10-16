import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { GLOBAL } from "../services/global.service";

@Injectable()
export class ProductsService {
    public url: string;

    constructor(
        public _http: HttpClient
    ) {
        this.url = GLOBAL.url;
    }

    getProducts() {
        return this._http.get(this.url + 'products');
    }
}