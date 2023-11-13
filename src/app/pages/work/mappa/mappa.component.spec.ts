import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MappaComponent } from './mappa.component';

describe('MappaComponent', () => {
  let component: MappaComponent;
  let fixture: ComponentFixture<MappaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MappaComponent]
    });
    fixture = TestBed.createComponent(MappaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
