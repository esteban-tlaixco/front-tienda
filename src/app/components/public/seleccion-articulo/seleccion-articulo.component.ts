import { AfterContentInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ArticuloCarritoRequest } from 'src/app/models/carrito/articulo.carrito.request';
import { ArticuloVentaDto } from 'src/app/models/carrito/articulo.venta.dto';
import { ClienteRequest } from 'src/app/models/cliente.request';
import { ArticuloService } from 'src/app/services/articulo.service';
import { CarritoService } from 'src/app/services/carrito.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-seleccion-articulo',
  templateUrl: './seleccion-articulo.component.html',
  styleUrls: ['./seleccion-articulo.component.css']
})
export class SeleccionArticuloComponent implements OnInit, AfterContentInit {

  constructor(private articuloService: ArticuloService,
    private carritoService: CarritoService,
    private router: Router,
  ) { }

  larticulos: ArticuloVentaDto[] = []

  idCliente: number = 0;
  esVisitante: boolean = true;

  ngOnInit(): void {
    try {
      this.idCliente = parseInt(sessionStorage.getItem("s-id") ?? "0");
      if(this.idCliente > 0) {
        this.esVisitante = false;
      }
      
    } catch (error) {
      
    }
  }

  ngAfterContentInit(): void {
    this.articulos();
  }

  articulos() {
    let request: ClienteRequest = {
      id: this.idCliente
    }

    this.carritoService.articulosventa(request).subscribe((res) => {
      this.larticulos = res
    })
  }

  add(articulo: ArticuloVentaDto) {
    if(this.esVisitante) {
      return;
    }

    let requet: ArticuloCarritoRequest = {
      cantidad: 1,
      codigo: articulo.codigo,
      id_cliente: this.idCliente
    }
    this.carritoService.add(requet).subscribe(r => {
      if(r.success) {
        this.articulos();
      }
    })
  }

  comprar() {
    if(this.esVisitante) {
      Swal.fire({
        text: 'Inicia sesión para realizar tu compra',
        icon: 'info',
        confirmButtonText: 'Si',
        showDenyButton: true,
        denyButtonText: 'No, seguir navegando'
      }).then((r)=> {
        if(r.isConfirmed) {
          this.router.navigate(['/login'])
        }
      })
    }
    else {
      Swal.fire({
        text: 'Funcionalidad no disponible',
        icon: 'info'
      })
    }
  }
}

