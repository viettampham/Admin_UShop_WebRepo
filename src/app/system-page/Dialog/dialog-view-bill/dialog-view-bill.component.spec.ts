import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogViewBillComponent } from './dialog-view-bill.component';

describe('DialogViewBillComponent', () => {
  let component: DialogViewBillComponent;
  let fixture: ComponentFixture<DialogViewBillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogViewBillComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogViewBillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
