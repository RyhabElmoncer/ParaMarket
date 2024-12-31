import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductVisageComponent } from './product-visage.component';

describe('ProductVisageComponent', () => {
  let component: ProductVisageComponent;
  let fixture: ComponentFixture<ProductVisageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductVisageComponent]
    });
    fixture = TestBed.createComponent(ProductVisageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
