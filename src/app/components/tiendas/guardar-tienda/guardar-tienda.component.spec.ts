import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuardarTiendaComponent } from './guardar-tienda.component';

describe('GuardarTiendaComponent', () => {
  let component: GuardarTiendaComponent;
  let fixture: ComponentFixture<GuardarTiendaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuardarTiendaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuardarTiendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
