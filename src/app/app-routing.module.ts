import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SeleccionArticuloComponent } from './components/public/seleccion-articulo/seleccion-articulo.component';
import { GuardarClienteComponent } from './components/clientes/guardar-cliente/guardar-cliente.component';

const routes: Routes = [
  {
    path: '',
    component: SeleccionArticuloComponent,
  }
  ,
  {
    path: 'login',
    component: LoginComponent,
  }
  ,
  {
    path: 'registro/cliente',
    component: GuardarClienteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
