import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProvaInputComponent } from './prova-input.component';

describe('ProvaInputComponent', () => {
  let component: ProvaInputComponent;
  let fixture: ComponentFixture<ProvaInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProvaInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProvaInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
