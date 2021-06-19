import { TestBed } from '@angular/core/testing';

import { CalculosService } from './calculos.service';

describe('CalculosService', () => {
  let service: CalculosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculosService);    
  });

  it('Instância de CalculosService disponível', () => {
    expect(service).toBeTruthy();
  });

  it('A soma numerica na função calcularSoma deve ser exata',() => {
    let soma = service.calcularSoma(2,2);
    expect(soma).toBe(4)
  });
  it('O Calculo na função calcularImposto deve ser exata',() => {
    let imposto = service.calcularImposto(2856.97,6.154);
    expect(imposto).toBeCloseTo(175.81,0.01);
  });
});
