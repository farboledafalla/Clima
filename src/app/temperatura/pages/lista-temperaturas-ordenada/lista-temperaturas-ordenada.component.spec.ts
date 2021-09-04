import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SortPipe } from 'src/app/pipes/sort.pipe';

import { ListaTemperaturasOrdenadaComponent } from './lista-temperaturas-ordenada.component';

describe('ListaTemperaturasOrdenadaComponent', () => {
  let component: ListaTemperaturasOrdenadaComponent;
  let fixture: ComponentFixture<ListaTemperaturasOrdenadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        ListaTemperaturasOrdenadaComponent,
        SortPipe
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaTemperaturasOrdenadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
