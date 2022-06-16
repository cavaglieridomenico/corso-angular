import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormTemplateDEsercizioComponent } from './form-template-d-esercizio.component';

describe('FormTemplateDEsercizioComponent', () => {
  let component: FormTemplateDEsercizioComponent;
  let fixture: ComponentFixture<FormTemplateDEsercizioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormTemplateDEsercizioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormTemplateDEsercizioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
