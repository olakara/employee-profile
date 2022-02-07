import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BloodTypeListComponent } from './blood-type-list.component';

describe('BloodTypeListComponent', () => {
  let component: BloodTypeListComponent;
  let fixture: ComponentFixture<BloodTypeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BloodTypeListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BloodTypeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
