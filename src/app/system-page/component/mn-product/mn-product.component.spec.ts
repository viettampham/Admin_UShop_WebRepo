import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MnProductComponent } from './mn-product.component';

describe('MnProductComponent', () => {
  let component: MnProductComponent;
  let fixture: ComponentFixture<MnProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MnProductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MnProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
