import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { ProjectBoxComponent } from './project-box.component';
import { MockTranslatePipe } from '../../testing/test-doubles';

describe('ProjectBoxComponent', () => {
  let component: ProjectBoxComponent;
  let fixture: ComponentFixture<ProjectBoxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectBoxComponent, MockTranslatePipe],
      imports: [RouterTestingModule]
    });
    fixture = TestBed.createComponent(ProjectBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
