import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';

import { HomeComponent } from './home.component';
import { activatedRouteStub, MockTranslatePipe } from '../../testing/test-doubles';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent, MockTranslatePipe],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: activatedRouteStub
        }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    });
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should expose the featured portfolio content', () => {
    expect(component.professionalExperiences.length).toBe(3);
    expect(component.featuredProjects.length).toBe(6);
  });
});
