import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartementsRegionComponent } from './departements-region.component';

describe('DepartementsRegionComponent', () => {
  let component: DepartementsRegionComponent;
  let fixture: ComponentFixture<DepartementsRegionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepartementsRegionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartementsRegionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
