import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemStatiComponent } from './item-stati.component';

describe('ItemStatiComponent', () => {
  let component: ItemStatiComponent;
  let fixture: ComponentFixture<ItemStatiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemStatiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemStatiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
