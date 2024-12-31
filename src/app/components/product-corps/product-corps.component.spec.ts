import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCorpsComponent } from './product-corps.component';

describe('ProductCorpsComponent', () => {
  let component: ProductCorpsComponent;
  let fixture: ComponentFixture<ProductCorpsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductCorpsComponent]
    });
    fixture = TestBed.createComponent(ProductCorpsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
