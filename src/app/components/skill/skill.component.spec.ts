import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillComponent } from './skill.component';
import { MockTranslatePipe, TEST_IMAGE_DATA_URL } from '../../testing/test-doubles';

describe('SkillComponent', () => {
  let component: SkillComponent;
  let fixture: ComponentFixture<SkillComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SkillComponent, MockTranslatePipe]
    });
    fixture = TestBed.createComponent(SkillComponent);
    component = fixture.componentInstance;
    component.skill = {
      img: TEST_IMAGE_DATA_URL,
      title: 'Test Skill',
      level: ''
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
