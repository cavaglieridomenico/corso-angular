import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EsempioLocalRefComponent } from './esempio-local-ref.component';

describe('EsempioLocalRefComponent', () => {
  let component: EsempioLocalRefComponent;
  let fixture: ComponentFixture<EsempioLocalRefComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EsempioLocalRefComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EsempioLocalRefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
