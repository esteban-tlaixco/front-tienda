import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Cliente } from 'src/app/models/cliente';
import { ClienteService } from 'src/app/services/cliente.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-guardar-cliente',
  templateUrl: './guardar-cliente.component.html',
  styleUrls: ['./guardar-cliente.component.css']
})
export class GuardarClienteComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,
    private clienteService: ClienteService,
    private activatedRoute: ActivatedRoute
  ) { }

  formCliente!: FormGroup;

  nombreControl = new FormControl();
  apellidosControl = new FormControl();
  direccionControl = new FormControl();
  usuarioControl = new FormControl();
  contraseniaControl = new FormControl();

  idCliente: number = 0;
  modoEdicion: boolean = false;

  ngOnInit(): void {
    this.formCliente = this.formBuilder.group({
      nombre: this.nombreControl,
      apellidos: this.apellidosControl,
      direccion: this.direccionControl,
      usuario: this.usuarioControl,
      contrasenia: this.contraseniaControl,
    })

    try {
      this.activatedRoute.params
      .subscribe((params)=> {
        this.idCliente = params['id'];
        if(this.idCliente != null && this.idCliente > 0 ){
          this.modoEdicion = true;
          this.buscar(this.idCliente);
        }
      });
    }catch (error) {}
  }

  buscar(id: number) {
    this.clienteService.findById(id).subscribe((response) => {
      if(response) {
        this.nombreControl.setValue(response.nombre);
        this.apellidosControl.setValue(response.apellidos);
        this.direccionControl.setValue(response.direccion);
      }
    })
  }

  guardar() {
    let resquest: Cliente = {
      id: 0,
      nombre: this.formCliente.value.nombre,
      apellidos: this.formCliente.value.apellidos,
      direccion: this.formCliente.value.direccion,
      usuario: this.usuarioControl.value,
      contrasenia: this.contraseniaControl.value,
    }
    this.clienteService.save(resquest).subscribe((data) => {
      if(data && data > 0) {
        Swal.fire({
          text: 'Cliente guardado con exito',
          icon: 'success',
        });
        window.history.back();
      }
      else {
        Swal.fire({
          text: 'Error al guardar el cliente',
          icon: 'error',
        });
      }
    });
  }

  modificar() {
    let resquest: Cliente = {
      id: parseInt(this.idCliente.toString()),
      nombre: this.formCliente.value.nombre,
      apellidos: this.formCliente.value.apellidos,
      direccion: this.formCliente.value.direccion,
      usuario: this.usuarioControl.value,
      contrasenia: this.contraseniaControl.value,
    }
    this.clienteService.update(resquest).subscribe((data) => {
      if(data && data > 0) {
        Swal.fire({
          text: 'Cliente modificado con exito',
          icon: 'success',
        });
        window.history.back();
      }
      else {
        Swal.fire({
          text: 'Error al modificar el cliente',
          icon: 'error',
        });
      }
    });
  }
}
