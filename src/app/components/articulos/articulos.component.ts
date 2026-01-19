import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Articulo } from 'src/app/models/articulo';
import { ArticuloService } from 'src/app/services/articulo.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-articulos',
  templateUrl: './articulos.component.html',
  styleUrls: ['./articulos.component.css']
})
export class ArticulosComponent implements OnInit {

  constructor(private articuloService: ArticuloService,
    private router: Router) { }

  larticulos: Articulo[] = [];
  displayedColumns: string[] = ['codigo', 'descripcion', 'precio', 'stock', 'modificar', 'eliminar'];


  ngOnInit(): void {
    this.listar();
  }

  listar() {
    this.articuloService.articulos().subscribe((data) => {
      this.larticulos = data;
    });
  }

  modificar(articulo: Articulo) {
    this.router.navigate(['/index/articulos/modificar/' + articulo.codigo]);
  }

  delete(articulo: Articulo) {
    Swal.fire({
      title: '¿Deseas eliminar el articulo?',
      icon: 'question',
      denyButtonText: 'No',
      confirmButtonText: 'Si',
      showDenyButton: true,
      background: 'black'
    }).then((r) => {
      if (r.isConfirmed) {
        this.articuloService.delete(articulo.codigo).subscribe((res) => {
          if (res == null) {
            Swal.fire({
              text: 'Articulo eliminado con exito',
              icon: 'success',
            });
            this.listar();
          } else {
            Swal.fire({
              text: 'Error al eliminar el articulo',
              icon: 'error',
            });
          }
        });
      }
    })

  }
}
