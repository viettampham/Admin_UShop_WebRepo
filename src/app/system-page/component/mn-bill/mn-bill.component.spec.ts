import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MnBillComponent } from './mn-bill.component';

describe('MnBillComponent', () => {
  let component: MnBillComponent;
  let fixture: ComponentFixture<MnBillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MnBillComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MnBillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
