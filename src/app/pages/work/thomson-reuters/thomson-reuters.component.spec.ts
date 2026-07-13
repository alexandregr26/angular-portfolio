import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThomsonReutersComponent } from './thomson-reuters.component';
import { MockTranslatePipe } from '../../../testing/test-doubles';

describe('ThomsonReutersComponent', () => {
  let component: ThomsonReutersComponent;
  let fixture: ComponentFixture<ThomsonReutersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ThomsonReutersComponent, MockTranslatePipe],
      schemas: [NO_ERRORS_SCHEMA]
    });
    fixture = TestBed.createComponent(ThomsonReutersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
