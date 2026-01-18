import { Articulo } from "../articulo";

export interface ArticuloVentaDto extends Articulo {
    tienda: string;
    apartados: number;
    subtotal: number;
}