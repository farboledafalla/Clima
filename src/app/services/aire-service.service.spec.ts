import { TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';

import { AireServiceService } from './aire-service.service';

// Clase para crear la instancia necesaria
class HttpClientMock {
  get = jasmine.createSpy('httpClient.get');
}

describe('AireServiceService', () => {
  let service: AireServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AireServiceService,
        {
          provide: HttpClient,
          useClass: HttpClientMock
        }
      ]
    });
    service = TestBed.inject(AireServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
