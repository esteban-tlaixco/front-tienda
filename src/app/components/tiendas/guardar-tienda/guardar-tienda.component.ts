import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Tienda } from '../tiendas.component';
import { TiendaService } from 'src/app/services/tiendas.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-guardar-tienda',
  templateUrl: './guardar-tienda.component.html',
  styleUrls: ['./guardar-tienda.component.css']
})
export class GuardarTiendaComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private tiendaService: TiendaService) { }

  formTienda!: FormGroup;
  sucursalControl = new FormControl();
  direccionControl = new FormControl();
  idTienda: number = 0;
  modoEdicion: boolean = false;

  ngOnInit(): void {
    this.formTienda = this.formBuilder.group({
      sucursal: this.sucursalControl,
      direccion: this.direccionControl,
    });
    
    try {
     this.activatedRoute.params.subscribe((params)=> {
      debugger
        this.idTienda = params['id'];
        if(this.idTienda != null && this.idTienda > 0) {
          this.modoEdicion = true;
        }
     }) 
    }
    catch (e) {}
  }

  guardar() {
    if(this.sucursalControl.value == null || this.direccionControl.value == null) {
      Swal.fire({
        text: "Completa todos los campos requeridos",
        icon: 'warning',
      });
      return;
    }

    let tienda: Tienda = {
      id: 0,
      sucursal: this.sucursalControl.value,
      direccion: this.direccionControl.value
    }
    this.tiendaService.save(tienda).subscribe((r) => {
      if (r > 0) {
        Swal.fire({
          text: 'Tienda guardada con exito',
          icon: 'success',
        })
          .then(() => {
            window.history.back();
          })
      }
      else {
        Swal.fire({
          text: 'Error al guardar la tienda',
          icon: 'error',
        });
      }
    });
  }

  modificar() {
    if(this.sucursalControl.value == null || this.direccionControl.value == null) {
      Swal.fire({
        text: "Completa todos los campos requeridos",
        icon: 'warning',
      });
      return;
    }

    let tienda: Tienda = {
      id: parseInt(this.idTienda.toString()),
      sucursal: this.sucursalControl.value,
      direccion: this.direccionControl.value
    }
    this.tiendaService.update(tienda).subscribe((r) => {
      if (r > 0) {
        Swal.fire({
          text: 'Tienda modificada con exito',
          icon: 'success',
        })
          .then(() => {
            window.history.back();
          })
      }
      else {
        Swal.fire({
          text: 'Error al modificar la tienda',
          icon: 'error',
        });
      }
    });
  }
}
