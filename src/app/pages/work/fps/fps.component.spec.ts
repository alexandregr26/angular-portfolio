import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FpsComponent } from './fps.component';
import { MockTranslatePipe } from '../../../testing/test-doubles';

describe('FpsComponent', () => {
  let component: FpsComponent;
  let fixture: ComponentFixture<FpsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FpsComponent, MockTranslatePipe],
      schemas: [NO_ERRORS_SCHEMA]
    });
    fixture = TestBed.createComponent(FpsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
