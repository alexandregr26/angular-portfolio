import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SplitzComponent } from './splitz.component';

describe('SplitzComponent', () => {
  let component: SplitzComponent;
  let fixture: ComponentFixture<SplitzComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SplitzComponent]
    });
    fixture = TestBed.createComponent(SplitzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
