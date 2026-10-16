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

  it('renders a readable skill label without adding a document heading', () => {
    expect(fixture.nativeElement.querySelector('.mini-title').textContent.trim()).toBe('Test Skill');
    expect(fixture.nativeElement.querySelector('h1,h2,h3,h4,h5,h6')).toBeNull();
  });
});
