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
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    IndexComponent,
    TiendasComponent,
    GuardarTiendaComponent,
    ArticulosComponent,
    GuardarArticuloComponent
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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
