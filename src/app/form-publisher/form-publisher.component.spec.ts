import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPublisherComponent } from './form-publisher.component';

describe('FormPublisherComponent', () => {
  let component: FormPublisherComponent;
  let fixture: ComponentFixture<FormPublisherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormPublisherComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormPublisherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
