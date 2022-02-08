import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterDataHomeComponent } from './master-data-home.component';

describe('MasterDataHomeComponent', () => {
  let component: MasterDataHomeComponent;
  let fixture: ComponentFixture<MasterDataHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MasterDataHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterDataHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
