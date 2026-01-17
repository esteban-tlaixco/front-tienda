import { Byte } from "@angular/compiler/src/util";

export interface ArticuloRequest {
    codigo: string;
    descripcion: string;
    precio: number;
    imagen?: Byte[];
    stock: number;
    id_tienda: number;
}