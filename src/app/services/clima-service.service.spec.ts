import { TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';

import { ClimaServiceService } from './clima-service.service';

// Clase para crear la instancia necesaria
class HttpClientMock {
  get = jasmine.createSpy('httpClient.get');
}

describe('ClimaServiceService', () => {
  let service: ClimaServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ClimaServiceService,
        {
          provide: HttpClient,
          useClass: HttpClientMock
        }
      ]
    });
    service = TestBed.inject(ClimaServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
