import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralInfoDetailsComponent } from './general-info-details.component';

describe('GeneralInfoDetailsComponent', () => {
  let component: GeneralInfoDetailsComponent;
  let fixture: ComponentFixture<GeneralInfoDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneralInfoDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralInfoDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
