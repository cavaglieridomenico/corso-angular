import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Esercizio3Component } from './esercizio3.component';

describe('Esercizio3Component', () => {
  let component: Esercizio3Component;
  let fixture: ComponentFixture<Esercizio3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Esercizio3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Esercizio3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
