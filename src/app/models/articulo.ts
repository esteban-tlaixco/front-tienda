import { Byte } from "@angular/compiler/src/util";

export interface Articulo {
    codigo: string;
    descripcion: string;
    precio: number;
    imagen: Byte[];
    stock: number;
}