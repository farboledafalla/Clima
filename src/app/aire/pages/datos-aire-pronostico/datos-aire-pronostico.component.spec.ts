import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosAirePronosticoComponent } from './datos-aire-pronostico.component';

describe('DatosAirePronosticoComponent', () => {
  let component: DatosAirePronosticoComponent;
  let fixture: ComponentFixture<DatosAirePronosticoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatosAirePronosticoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatosAirePronosticoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
