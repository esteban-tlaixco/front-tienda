import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { IndexComponent } from './components/index/index.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatFormFieldModule
  
} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComponentsRoutingModule } from './components/conponents-routing.modules';
import { TiendasComponent } from './components/tiendas/tiendas.component';
import { MatTableModule } from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import { GuardarTiendaComponent } from './components/tiendas/guardar-tienda/guardar-tienda.component';
import { MatIconModule } from '@angular/material/icon';
import { ArticulosComponent } from './components/articulos/articulos.component';
import { GuardarArticuloComponent } from './components/articulos/guardar-articulo/guardar-articulo.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { GuardarClienteComponent } from './components/clientes/guardar-cliente/guardar-cliente.component';
import { MatSelectModule } from '@angular/material/select';
import { CarritoComponent } from './components/public/carrito/carrito.component';
import {MatCardModule} from '@angular/material/card'
import {MatBadgeModule} from '@angular/material/badge';
import { SeleccionArticuloComponent } from './components/public/seleccion-articulo/seleccion-articulo.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    IndexComponent,
    TiendasComponent,
    GuardarTiendaComponent,
    ArticulosComponent,
    GuardarArticuloComponent,
    ClientesComponent,
    GuardarClienteComponent,
    CarritoComponent,
    SeleccionArticuloComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentsRoutingModule,

    BrowserAnimationsModule,
    MatFormFieldModule,
     MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    HttpClientModule,
    MatButtonModule,
    MatIconModule,
    MatSelectModule,
    MatCardModule,
    MatBadgeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
