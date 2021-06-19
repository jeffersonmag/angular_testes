import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import { Observable } from 'rxjs';
import { Produto } from '../classes/produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {
  url: string = "http://localhost:3200/api/produtos";
  constructor(private http: HttpClient) { }

  getProdutos(): Observable<Produto[]>{
    return this.http.get<Produto[]>(this.url);
  }
}
