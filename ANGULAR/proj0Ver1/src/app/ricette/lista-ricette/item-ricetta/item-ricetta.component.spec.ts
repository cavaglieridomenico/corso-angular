import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemRicettaComponent } from './item-ricetta.component';

describe('ItemRicettaComponent', () => {
  let component: ItemRicettaComponent;
  let fixture: ComponentFixture<ItemRicettaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemRicettaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemRicettaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
