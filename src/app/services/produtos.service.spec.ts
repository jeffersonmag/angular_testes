import { TestBed } from '@angular/core/testing';

import { ProdutosService } from './produtos.service';
import { HttpClient } from '@angular/common/http';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { Produto } from '../classes/produto';

describe('ProdutosService', () => {
  let service: ProdutosService;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let produto: Produto;  

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule ]
    });
    //service = TestBed.inject(ProdutosService);
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
    httpTestingController = TestBed.inject(HttpTestingController);
    httpClient = TestBed.inject(HttpClient);
  });

  it('teste de requisição http', () => {
    produto = {
      _id:"60c8ffdc5f72fa3ddda9c5dd",
      codigo:"10",
      descricao:"Lajota",
      unidade:"uni",
      preco:17,
      categoria:"CONSTRUCAO"
    }
      httpClient.get<Produto[]>('http://localhost:3200/api/produtos')
        .subscribe(res => expect(res[0]).toEqual(produto));
      
      const req = httpTestingController.expectOne('http://localhost:3200/api/produtos');
      expect(req.request.method).toEqual('GET');

  });

  afterEach(() => {
    httpTestingController.verify();
  });
});
