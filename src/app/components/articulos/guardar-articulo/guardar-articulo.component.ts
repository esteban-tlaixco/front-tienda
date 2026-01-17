import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Articulo } from 'src/app/models/articulo';
import { ArticuloService } from 'src/app/services/articulo.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-guardar-articulo',
  templateUrl: './guardar-articulo.component.html',
  styleUrls: ['./guardar-articulo.component.css']
})
export class GuardarArticuloComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, 
    private articuloService: ArticuloService,
    private activatedRoute: ActivatedRoute
  ) { }

  formArticulo!: FormGroup;
  codigoControl = new FormControl();
  descripcionControl = new FormControl();
  precioControl = new FormControl();
  //imagenControl = new FormControl();
  stockControl = new FormControl();

  codigoarticulo: string = '';
  modoEdicion: boolean = false;

  ngOnInit(): void {
    this.formArticulo = this.formBuilder.group({
      codigo: this.codigoControl,
      descripcion: this.descripcionControl,
      precio:   this.precioControl,
      //imagen: [''],
      stock: this.stockControl,
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
    let request: Articulo = this.formArticulo.value;
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
    let request: Articulo = this.formArticulo.value;
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
