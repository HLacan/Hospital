import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Products } from "../models/product.model";
import { GLOBAL } from "../services/global.service";

@Injectable()
export class ProductsService {
    public url: string;

    constructor(
        public _http: HttpClient
    ) {
        this.url = GLOBAL.url;
    }

    getAllProducts() {
        return this._http.get(this.url + 'products');
    }

    getProduct(id) {
        return this._http.get(this.url + 'product/' + id)
    }

    getFilter(id) {
        return this._http.get(this.url + 'get-filter-products/' + id);
    }

    addProduct(product: Products): Observable<any> {
        let params = JSON.stringify(product);
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this._http.post(this.url + 'add-product', params, { headers: headers });
    }

    updateProduct(product: Products): Observable<any> {
        let params = JSON.stringify(product);
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this._http.put(this.url + 'update-product/' + product._id, params, { headers: headers });
    }

    deleteProduct(productID): Observable<any> {
        let params = JSON.stringify(productID);
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this._http.delete(this.url + 'delete-product/' + productID, { headers: headers });
    }
}