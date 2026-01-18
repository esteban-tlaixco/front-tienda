import { AfterContentInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ClienteService } from 'src/app/services/cliente.service';
import { SecurityService } from 'src/app/services/security.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit, AfterContentInit {

  constructor(private router: Router,
    private securityService: SecurityService,
    private clienteService: ClienteService,
  ){

  }

  isadmin: boolean = false;
  nombre_usuario: string = '';

  ngOnInit(): void {
    //Esto debe ir en un interceptor
    if(!sessionStorage.getItem("s-rol-sys")){
      this.securityService.logout();
    }

    let rol = sessionStorage.getItem("s-rol-sys");
    if(rol && rol === "CLIENTE") {
      this.isadmin = false
      this.router.navigate(['/index/comprar/articulos'])
    }
    else {
      this.isadmin = true;
    }
  }
  
  ngAfterContentInit(): void {
    
    try {
      let id: string = sessionStorage.getItem("s-id") ?? "0";
      let rol = sessionStorage.getItem("s-rol-sys");
      if(rol === "CLIENTE") {
        this.clienteService.findById(parseInt(id)).subscribe(r => {
          this.nombre_usuario =r.nombre + " " + r.apellidos;
        })
      }
    }catch(e) {}
  }

  logout() {
    this.securityService.logout();
  }

}
