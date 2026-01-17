import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { Articulo } from "../models/articulo";

@Injectable({
    providedIn: 'root'
})
export class ArticuloService {

    constructor(private http: HttpClient) { 

    }

    urlApi: string = environment.articulosApi;

    public articulos() {
        return this.http.get<Articulo[]>(this.urlApi);
    }

    findById(codigo: string) {
        return this.http.get<Articulo>(this.urlApi + "/" + codigo);
    }

    save(request: Articulo) {
        return this.http.post<number>(this.urlApi + "/save", request);
    }

    update(request: Articulo) {
        return this.http.put<number>(this.urlApi + "/update", request);
    }

    delete(codigo: string) {
        return this.http.delete(this.urlApi + "/" + codigo);
    }
}