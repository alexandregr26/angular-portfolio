import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Aps360Component } from './aps360.component';

describe('Aps360Component', () => {
  let component: Aps360Component;
  let fixture: ComponentFixture<Aps360Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Aps360Component]
    });
    fixture = TestBed.createComponent(Aps360Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
