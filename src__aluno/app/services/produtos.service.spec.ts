import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { ProdutosService } from './produtos.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Produto } from '../classes/produto';

describe('ProdutosService', () => {
  let service: ProdutosService;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let produto: Produto;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    // service = TestBed.inject(ProdutosService);
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
    httpTestingController = TestBed.inject(HttpTestingController);
    httpClient = TestBed.inject(HttpClient);
  });

  it('teste de requisição http', () => {
    produto = {
      _id: "60ce01fd89ca9d1301b622ca",
      codigo: 45,
      descricao: "Bolacha",
      unidade: "Pc",
      categoria: "ALIMENTACAO",
      preco: 1.56
    }

    httpClient.get<Produto[]>('http://localhost:3200/api/produtos')
      .subscribe(res => expect(res[0]).toEqual(produto));

    const req = httpTestingController.expectOne('http://localhost:3200/api/produtos');
    expect(req.request.method).toEqual('GET');

    // req.flush(produto);
  });

  afterEach(() => {
    httpTestingController.verify(); // não sendo mais disponível ela libera
  })
});
