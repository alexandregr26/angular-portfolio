import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThomsonReutersComponent } from './thomson-reuters.component';

describe('ThomsonReutersComponent', () => {
  let component: ThomsonReutersComponent;
  let fixture: ComponentFixture<ThomsonReutersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ThomsonReutersComponent]
    });
    fixture = TestBed.createComponent(ThomsonReutersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
