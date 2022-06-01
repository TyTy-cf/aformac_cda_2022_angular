import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiPaginatorComponent } from './api-paginator.component';

describe('ApiPaginatorComponent', () => {
  let component: ApiPaginatorComponent;
  let fixture: ComponentFixture<ApiPaginatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApiPaginatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiPaginatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
