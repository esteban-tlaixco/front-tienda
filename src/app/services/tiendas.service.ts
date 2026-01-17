import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from 'src/environments/environment';
import { Tienda } from "../components/tiendas/tiendas.component";

@Injectable({
  providedIn: 'root'
})
export class TiendaService {

    constructor(private http: HttpClient) { }

    urlService: string = environment.tiendas;

    public tiendas() {
        return this.http.get<Tienda[]>(this.urlService);
    }

    delete(id: number) {
        return this.http.delete(this.urlService + "/" +id);
    }

    save(reques: Tienda) {
        return this.http.post<number>(this.urlService + "/save", reques);
    }

    update(reques: Tienda) {
        return this.http.put<number>(this.urlService + "/update", reques);
    }

}