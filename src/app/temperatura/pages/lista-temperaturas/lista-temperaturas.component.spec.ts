import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaTempereaturasComponent } from './lista-temperaturas.component';

describe('ListaTempereaturasComponent', () => {
  let component: ListaTempereaturasComponent;
  let fixture: ComponentFixture<ListaTempereaturasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        ListaTempereaturasComponent 
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaTempereaturasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
