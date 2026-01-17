import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Articulo } from 'src/app/models/articulo';
import { ArticuloService } from 'src/app/services/articulo.service';
import Swal from 'sweetalert2';
import { Tienda } from '../../tiendas/tiendas.component';
import { TiendaService } from 'src/app/services/tiendas.service';
import { ArticuloRequest } from 'src/app/models/articulo.request';

@Component({
  selector: 'app-guardar-articulo',
  templateUrl: './guardar-articulo.component.html',
  styleUrls: ['./guardar-articulo.component.css']
})
export class GuardarArticuloComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, 
    private articuloService: ArticuloService,
    private activatedRoute: ActivatedRoute,
    private tiendaService: TiendaService,
  ) { }

  formArticulo!: FormGroup;
  codigoControl = new FormControl();
  descripcionControl = new FormControl();
  precioControl = new FormControl();
  //imagenControl = new FormControl();
  stockControl = new FormControl();
  tiendaControl = new FormControl();

  codigoarticulo: string = '';
  modoEdicion: boolean = false;

  ltinedas: Tienda[] = [];

  ngOnInit(): void {
    this.formArticulo = this.formBuilder.group({
      codigo: this.codigoControl,
      descripcion: this.descripcionControl,
      precio:   this.precioControl,
      //imagen: [''],
      stock: this.stockControl,
      tienda: this.tiendaControl,
    });

    try {
      this.activatedRoute.params.subscribe(params => {
        this.codigoarticulo = params['modificar'];
        if(this.codigoarticulo != null && this.codigoarticulo != '') {
          this.modoEdicion = true;
          this.buscar(this.codigoarticulo);
        }
      });
    }
    catch (error) {

    }

    //Recupero las tiendas
    this.tiendaService.tiendas().subscribe((data) => {
      this.ltinedas = data;
    });
  }

  buscar(codigo: string) {
    this.articuloService.findById(codigo).subscribe((data) => {
      this.formArticulo.patchValue({
        codigo: data.codigo,
        descripcion: data.descripcion,
        precio: data.precio,
        //imagen: data.imagen,
        stock: data.stock,
      });
    });
  }


  guardar() {
    let request: ArticuloRequest = {
      codigo: this.formArticulo.value.codigo,
      descripcion: this.formArticulo.value.descripcion,
      precio: this.formArticulo.value.precio,
      //imagen: this.formArticulo.value.imagen,
      stock: this.formArticulo.value.stock,
      id_tienda: this.formArticulo.value.tienda.id,
    }
    this.articuloService.save(request).subscribe((res) => {
      if(res > 0) {
        Swal.fire({
          text: 'Articulo guardado con exito',
          icon: 'success',
        })
        window.history.back();
      }else {
        Swal.fire({
          text: 'Error al guardar el articulo',
          icon: 'error',
        })
      }
    });
  }

  modificar() {
     let request: ArticuloRequest = {
      codigo: this.formArticulo.value.codigo,
      descripcion: this.formArticulo.value.descripcion,
      precio: this.formArticulo.value.precio,
      //imagen: this.formArticulo.value.imagen,
      stock: this.formArticulo.value.stock,
      id_tienda: this.formArticulo.value.tienda.id,
    }
    this.articuloService.update(request).subscribe((res) => {
      if(res > 0) {
        Swal.fire({
          text: 'Articulo modificado con exito',
          icon: 'success',
        })
        window.history.back();
      }else {
        Swal.fire({
          text: 'Error al modificar el articulo',
          icon: 'error',
        })
      }
    });
  }
}
