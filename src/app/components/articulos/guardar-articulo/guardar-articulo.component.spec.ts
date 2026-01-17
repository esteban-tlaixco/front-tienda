import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuardarArticuloComponent } from './guardar-articulo.component';

describe('GuardarArticuloComponent', () => {
  let component: GuardarArticuloComponent;
  let fixture: ComponentFixture<GuardarArticuloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuardarArticuloComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuardarArticuloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
