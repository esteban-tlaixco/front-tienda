import { AfterContentInit, Component, OnInit } from '@angular/core';
import { Articulo } from 'src/app/models/articulo';
import { ArticuloCarritoRequest } from 'src/app/models/carrito/articulo.carrito.request';
import { ArticuloVentaDto } from 'src/app/models/carrito/articulo.venta.dto';
import { ClienteRequest } from 'src/app/models/cliente.request';
import { ArticuloService } from 'src/app/services/articulo.service';
import { CarritoService } from 'src/app/services/carrito.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit, AfterContentInit {

  constructor(private articuloService: ArticuloService,
    private carritoService: CarritoService,
  ) { }

  larticulos: ArticuloVentaDto[] = []

  idCliente: number = 0;
  totalpago: number = 0;

  displayedColumns: string[] = ['codigo', 'descripcion', 'precio', 'apartados', 'subtotal', 'modificar', 'eliminar'];

  ngOnInit(): void {
    try {
      this.idCliente = parseInt(sessionStorage.getItem("s-id") ?? "0");
      
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
      this.larticulos = res;
      if(this.larticulos.length > 0) {
        this.larticulos = this.larticulos.filter((f) => f.apartados >0);
        this.larticulos =this.larticulos.map((v, i) => {
          this.totalpago =  (this.totalpago + (v.apartados * v.precio))
          return {
            ...v,
            subtotal: v.apartados * v.precio
          }
        })
      }
      
    })
  }

  add(articulo: ArticuloVentaDto) {
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
}
