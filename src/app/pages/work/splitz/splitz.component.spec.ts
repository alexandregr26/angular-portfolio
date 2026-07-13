import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SplitzComponent } from './splitz.component';
import { MockTranslatePipe } from '../../../testing/test-doubles';

describe('SplitzComponent', () => {
  let component: SplitzComponent;
  let fixture: ComponentFixture<SplitzComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SplitzComponent, MockTranslatePipe],
      schemas: [NO_ERRORS_SCHEMA]
    });
    fixture = TestBed.createComponent(SplitzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
