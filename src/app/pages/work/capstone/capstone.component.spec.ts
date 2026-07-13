import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CapstoneComponent } from './capstone.component';
import { MockTranslatePipe } from '../../../testing/test-doubles';

describe('CapstoneComponent', () => {
  let component: CapstoneComponent;
  let fixture: ComponentFixture<CapstoneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CapstoneComponent, MockTranslatePipe],
      schemas: [NO_ERRORS_SCHEMA]
    });
    fixture = TestBed.createComponent(CapstoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
