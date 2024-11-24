import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormuClienteComponent } from './formu-cliente.component';

describe('FormuClienteComponent', () => {
  let component: FormuClienteComponent;
  let fixture: ComponentFixture<FormuClienteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormuClienteComponent]
    });
    fixture = TestBed.createComponent(FormuClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
