import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkHeaderComponent } from './work-header.component';
import { TEST_IMAGE_DATA_URL } from '../../testing/test-doubles';

describe('WorkHeaderComponent', () => {
  let component: WorkHeaderComponent;
  let fixture: ComponentFixture<WorkHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WorkHeaderComponent]
    });
    fixture = TestBed.createComponent(WorkHeaderComponent);
    component = fixture.componentInstance;
    component.header = {
      img: TEST_IMAGE_DATA_URL
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
