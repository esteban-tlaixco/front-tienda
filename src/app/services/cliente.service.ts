import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { Cliente } from "../models/cliente";

@Injectable({
    providedIn: 'root'
})
export class ClienteService {
    constructor(private http: HttpClient) { }

    urlApi: string = environment.clientesApi;

    clientes() {
        return this.http.get<Cliente[]>(this.urlApi);
    }
    
    findById(id: number) {
        return this.http.get<Cliente>(this.urlApi + "/" + id);
    }

    save(request: Cliente) {
        return this.http.post<number>(this.urlApi + "/save", request);
    }   

    update(request: Cliente) {
        return this.http.put<number>(this.urlApi + "/update", request);
    }

    delete(id: number) {
        return this.http.delete(this.urlApi + "/" + id);
    }
}