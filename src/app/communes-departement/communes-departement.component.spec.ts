import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunesDepartementComponent } from './communes-departement.component';

describe('CommunesDepartementComponent', () => {
  let component: CommunesDepartementComponent;
  let fixture: ComponentFixture<CommunesDepartementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommunesDepartementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommunesDepartementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
