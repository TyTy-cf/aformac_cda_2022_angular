import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreadCrumbsGeoApiComponent } from './bread-crumbs-geo-api.component';

describe('BreadCrumbsGeoApiComponent', () => {
  let component: BreadCrumbsGeoApiComponent;
  let fixture: ComponentFixture<BreadCrumbsGeoApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BreadCrumbsGeoApiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BreadCrumbsGeoApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
