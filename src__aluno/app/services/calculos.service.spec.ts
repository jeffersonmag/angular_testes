import { TestBed } from '@angular/core/testing';

import { CalculosService } from './calculos.service';

describe('CalculosService', () => {
  let service: CalculosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculosService);
  });

  it('instância de CalculosService disponível', () => {
    expect(service).toBeTruthy();
  });

  it('A soma númerica na função calcularSoma deve ser exata', () => {
    let soma = service.calcularSoma(2, 2);
    expect(soma).toBe(4);
  });

  it('O imposto deve fornecer valores validos', () => {
    let imposto = service.calcularImposto(2856.97, 6.154);
    expect(imposto).toBeCloseTo(175.82, 0.01); /// aqui você tem uma tolerância de 0.01
    /// expect(imposto).toBe(175.81);  /// equivale a ===
  });

});
