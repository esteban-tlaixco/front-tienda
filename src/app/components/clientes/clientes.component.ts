import { AfterContentInit, Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/models/cliente';
import { ClienteService } from 'src/app/services/cliente.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit, AfterContentInit {

  constructor(private clienteService: ClienteService) { }

  displayedColumns: string[] = ['nombre', 'apellidos', 'direccion', 'modificar', 'eliminar'];

  lclientes: Cliente[] = []

  ngOnInit(): void {
  }

  ngAfterContentInit(): void {
    this.listar();
  }

  listar() {
    this.clienteService.clientes().subscribe((data) => {
      this.lclientes = data;
    });
  }

  delete(cliente: Cliente) {
    Swal.fire({
      text: '¿Seguro de eliminar el cliente?',
      icon: 'warning',
      confirmButtonText: 'Si',
      showDenyButton: true,
      denyButtonText: 'No',
      theme: 'dark',
    }).then((res) => {
      if (res.isConfirmed) {
        this.clienteService.delete(cliente.id).subscribe((res) => {
          if (res == null) {
            Swal.fire({
              text: 'Cliente eliminado con exito',
              icon: 'success',
            });
            this.listar();
          } else {
            Swal.fire({
              text: 'Error al eliminar el cliente',
              icon: 'error',
            });
          }
        });
      }
    })
  }

}
