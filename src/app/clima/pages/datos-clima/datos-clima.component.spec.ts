import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosClimaComponent } from './datos-clima.component';

describe('DatosClimaComponent', () => {
  let component: DatosClimaComponent;
  let fixture: ComponentFixture<DatosClimaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatosClimaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatosClimaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
