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

  it('provides a textual page heading alongside the decorative title image', () => {
    const headings = fixture.nativeElement.querySelectorAll('h1');
    expect(headings.length).toBe(1);
    expect(headings[0].textContent.trim()).toBe('Splitz');
    expect(headings[0].querySelector('img').getAttribute('alt')).toBe('');
  });
});
