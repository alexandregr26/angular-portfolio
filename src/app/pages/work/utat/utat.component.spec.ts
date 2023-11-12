import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UtatComponent } from './utat.component';

describe('UtatComponent', () => {
  let component: UtatComponent;
  let fixture: ComponentFixture<UtatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UtatComponent]
    });
    fixture = TestBed.createComponent(UtatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
