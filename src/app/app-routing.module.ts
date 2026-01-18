import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SeleccionArticuloComponent } from './components/public/seleccion-articulo/seleccion-articulo.component';

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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
