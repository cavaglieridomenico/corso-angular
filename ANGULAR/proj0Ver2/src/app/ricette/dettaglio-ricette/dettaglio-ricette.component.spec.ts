import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DettaglioRicetteComponent } from './dettaglio-ricette.component';

describe('DettaglioRicetteComponent', () => {
  let component: DettaglioRicetteComponent;
  let fixture: ComponentFixture<DettaglioRicetteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DettaglioRicetteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DettaglioRicetteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
