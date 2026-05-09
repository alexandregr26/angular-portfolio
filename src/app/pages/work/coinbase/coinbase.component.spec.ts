import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoinbaseComponent } from './coinbase.component';

describe('CoinbaseComponent', () => {
  let component: CoinbaseComponent;
  let fixture: ComponentFixture<CoinbaseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CoinbaseComponent]
    });
    fixture = TestBed.createComponent(CoinbaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
