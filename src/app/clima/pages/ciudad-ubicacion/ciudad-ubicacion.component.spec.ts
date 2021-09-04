import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CiudadUbicacionComponent } from './ciudad-ubicacion.component';

describe('CiudadUbicacionComponent', () => {
  let component: CiudadUbicacionComponent;
  let fixture: ComponentFixture<CiudadUbicacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CiudadUbicacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CiudadUbicacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
