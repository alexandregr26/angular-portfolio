import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoinbaseComponent } from './coinbase.component';
import { MockTranslatePipe } from '../../../testing/test-doubles';

describe('CoinbaseComponent', () => {
  let component: CoinbaseComponent;
  let fixture: ComponentFixture<CoinbaseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CoinbaseComponent, MockTranslatePipe],
      schemas: [NO_ERRORS_SCHEMA]
    });
    fixture = TestBed.createComponent(CoinbaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
