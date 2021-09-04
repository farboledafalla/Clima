import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { AireServiceService } from 'src/app/services/aire-service.service';

import { DatosAireComponent } from './datos-aire.component';

describe('DatosAireComponent', () => {
  let component: DatosAireComponent;
  let fixture: ComponentFixture<DatosAireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        DatosAireComponent
      ],
      imports: [
        HttpClientModule
      ],
      providers: [
        AireServiceService
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatosAireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
