import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { ArticuloVentaDto } from "../models/carrito/articulo.venta.dto";
import { GenericResponse } from "../models/shared/generic.response";
import { ArticuloCarritoRequest } from "../models/carrito/articulo.carrito.request";
import { ClienteRequest } from "../models/cliente.request";

@Injectable({
    providedIn: 'root'
})
export class CarritoService {

    constructor(private http: HttpClient) {

    }

    urlApi: string =environment.carritoApi

    articulosventa(request: ClienteRequest) {
        return this.http.post<ArticuloVentaDto[]>(this.urlApi + '/articulos-venta', request);
    }

    add(request: ArticuloCarritoRequest) {
        return this.http.post<GenericResponse>(this.urlApi + '/gregar-articulo', request);
    }
}