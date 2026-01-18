import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { LoginRequest } from "../models/security/login.equest";
import { LoginResponse } from "../models/security/login.response";
import { environment } from "src/environments/environment";
import { Router } from "@angular/router";

@Injectable({
    providedIn: 'root'
})
export class SecurityService {

    constructor(private http: HttpClient, private router: Router) { }

    urlApi: string = environment.securityApi;
    login(request: LoginRequest) {
        return this.http.post<LoginResponse>(this.urlApi + '/login', request);
    }

    saveToken(reques: LoginResponse) {
        sessionStorage.setItem("s-rol-sys", reques.rol);
        sessionStorage.setItem("s-id", reques.id.toString());
    }

    logout() {
        sessionStorage.clear();
        this.router.navigate(['/login']);
    }
}