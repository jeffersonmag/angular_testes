import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculosService {

  calcularSoma(x: number, y: number): number{
   return x + y;
  }

  calcularImposto(valor: number, taxa: number): number{
    return valor * taxa / 100;
   }
  constructor() { }
}
