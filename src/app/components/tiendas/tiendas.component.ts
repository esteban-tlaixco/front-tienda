import { AfterViewInit, Component, OnInit } from '@angular/core';
import { TiendaService } from 'src/app/services/tiendas.service';
import { catchError } from 'rxjs/operators';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tiendas',
  templateUrl: './tiendas.component.html',
  styleUrls: ['./tiendas.component.css']
})
export class TiendasComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['sucursal', 'direccion', 'modificar', 'eliminar'];
  dataSource: Tienda[] = []

  constructor(private tinedaService: TiendaService,
    private router: Router
  ) { }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    this.getTiendas();
  }

  getTiendas() {
    this.tinedaService.tiendas()
    .pipe(catchError((e) => {
      console.error(e);
      return [];
    }))
    .subscribe((r) => {
      this.dataSource = r;
    })
  }

  public delete(item: Tienda) {
    Swal.fire({
      text: '¿Seguro de eliminar la tienda?',
      icon: 'warning',
      confirmButtonText: 'Si',
      showDenyButton: true,
      denyButtonText: 'No',
      theme: 'dark',

    }).then((res) => {
      if (res.isConfirmed) {
        this.tinedaService.delete(item.id).subscribe((r) => {
          this.getTiendas();
        })
      }
    })
  }

  modificar(item: Tienda) {
    this.router.navigate(['/index/tiendas/modificar/' + item.id]);
  }

  add() {
    this.router.navigate(['/index/tiendas/guardar']);
  }
}

export interface Tienda {
  id: number;
  sucursal: string;
  direccion: string;
}
