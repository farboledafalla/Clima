import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { TemperaturaService } from 'src/app/services/temperatura.service';

import { ConsultaApiComponent } from './consulta-api.component';

describe('ConsultaApiComponent', () => {
  let component: ConsultaApiComponent;
  let fixture: ComponentFixture<ConsultaApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        ConsultaApiComponent
      ],
      imports: [
        HttpClientModule
      ],
      providers: [
        TemperaturaService
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultaApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
