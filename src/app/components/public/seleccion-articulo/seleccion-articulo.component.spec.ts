import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeleccionArticuloComponent } from './seleccion-articulo.component';

describe('SeleccionArticuloComponent', () => {
  let component: SeleccionArticuloComponent;
  let fixture: ComponentFixture<SeleccionArticuloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeleccionArticuloComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeleccionArticuloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
