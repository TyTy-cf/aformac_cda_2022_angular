import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegionsIndexComponent } from './regions-index.component';

describe('RegionsIndexComponent', () => {
  let component: RegionsIndexComponent;
  let fixture: ComponentFixture<RegionsIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegionsIndexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegionsIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
