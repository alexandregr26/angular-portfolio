import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmazonComponent } from './amazon.component';
import { MockTranslatePipe } from '../../../testing/test-doubles';

describe('AmazonComponent', () => {
  let component: AmazonComponent;
  let fixture: ComponentFixture<AmazonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AmazonComponent, MockTranslatePipe],
      schemas: [NO_ERRORS_SCHEMA]
    });
    fixture = TestBed.createComponent(AmazonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
