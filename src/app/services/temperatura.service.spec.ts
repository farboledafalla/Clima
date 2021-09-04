import { TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';

import { TemperaturaService } from './temperatura.service';

// Clase para crear la instancia necesaria
class HttpClientMock {
  get = jasmine.createSpy('httpClient.get');
}

describe('TemperaturaService', () => {
  let service: TemperaturaService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        TemperaturaService,
        {
          provide: HttpClient,
          useClass: HttpClientMock
        }
      ]
    });
    service = TestBed.inject(TemperaturaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
