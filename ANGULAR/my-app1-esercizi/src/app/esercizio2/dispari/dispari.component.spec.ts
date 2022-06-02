import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DispariComponent } from './dispari.component';

describe('DispariComponent', () => {
  let component: DispariComponent;
  let fixture: ComponentFixture<DispariComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DispariComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DispariComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
