import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MnCategoryComponent } from './mn-category.component';

describe('MnCategoryComponent', () => {
  let component: MnCategoryComponent;
  let fixture: ComponentFixture<MnCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MnCategoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MnCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
