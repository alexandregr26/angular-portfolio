import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ece344Component } from './ece344.component';

describe('Ece344Component', () => {
  let component: Ece344Component;
  let fixture: ComponentFixture<Ece344Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Ece344Component]
    });
    fixture = TestBed.createComponent(Ece344Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
