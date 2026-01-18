import { Byte } from "@angular/compiler/src/util";

export interface Articulo {
    codigo: string;
    descripcion: string;
    precio: number;
    imagen: string;
    stock: number;
    id_tienda?: number;
}