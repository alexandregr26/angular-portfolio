import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunityBoxComponent } from './community-box.component';
import { MockTranslatePipe, TEST_IMAGE_DATA_URL } from '../../testing/test-doubles';

describe('CommunityBoxComponent', () => {
  let component: CommunityBoxComponent;
  let fixture: ComponentFixture<CommunityBoxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CommunityBoxComponent, MockTranslatePipe]
    });
    fixture = TestBed.createComponent(CommunityBoxComponent);
    component = fixture.componentInstance;
    component.communitybox = {
      img: TEST_IMAGE_DATA_URL,
      title: 'Community Role',
      date: '2026',
      description: 'Community involvement description'
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
