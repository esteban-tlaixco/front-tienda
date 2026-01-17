import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { IndexComponent } from "./index/index.component";
import { TiendasComponent } from "./tiendas/tiendas.component";
import { GuardarTiendaComponent } from "./tiendas/guardar-tienda/guardar-tienda.component";
import { ArticulosComponent } from "./articulos/articulos.component";
import { GuardarArticuloComponent } from "./articulos/guardar-articulo/guardar-articulo.component";
import { ClientesComponent } from "./clientes/clientes.component";
import { GuardarClienteComponent } from "./clientes/guardar-cliente/guardar-cliente.component";

const routes: Routes = [
    {
        path: 'index',
        component: IndexComponent,

        children: [
            {
                path: 'tiendas',
                component: TiendasComponent,
            },
            {
                path: 'tiendas/guardar',
                component: GuardarTiendaComponent
            }
            ,
            {
                path: 'tiendas/modificar/:id',
                component: GuardarTiendaComponent
            }
            ,
            {
                path: 'articulos',
                component: ArticulosComponent
            }
            ,
            {
                path: 'articulos/crear',
                component: GuardarArticuloComponent
            }
            ,
            {
                path: 'articulos/modificar/:modificar',
                component: GuardarArticuloComponent
            }
            ,
            {
                path: 'clientes',
                component: ClientesComponent
            }
            ,
            {
                path: 'clientes/crear',
                component: GuardarClienteComponent
            }
            ,
            {
                path: 'clientes/modificar/:id',
                component: GuardarClienteComponent
            }
        ]
    }
]

@NgModule({
    declarations: [],
    imports: [
        RouterModule.forRoot(routes),
    ],
    exports: [RouterModule]
})
export class ComponentsRoutingModule {

}