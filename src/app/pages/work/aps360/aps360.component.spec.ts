import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Aps360Component } from './aps360.component';
import { MockTranslatePipe } from '../../../testing/test-doubles';

describe('Aps360Component', () => {
  let component: Aps360Component;
  let fixture: ComponentFixture<Aps360Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Aps360Component, MockTranslatePipe],
      schemas: [NO_ERRORS_SCHEMA]
    });
    fixture = TestBed.createComponent(Aps360Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
