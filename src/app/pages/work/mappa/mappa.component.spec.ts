import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MappaComponent } from './mappa.component';
import { MockTranslatePipe } from '../../../testing/test-doubles';

describe('MappaComponent', () => {
  let component: MappaComponent;
  let fixture: ComponentFixture<MappaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MappaComponent, MockTranslatePipe],
      schemas: [NO_ERRORS_SCHEMA]
    });
    fixture = TestBed.createComponent(MappaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
