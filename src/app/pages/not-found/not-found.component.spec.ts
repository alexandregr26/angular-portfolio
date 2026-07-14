import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { MockTranslatePipe } from '../../testing/test-doubles';
import { NotFoundComponent } from './not-found.component';

describe('NotFoundComponent', () => {
  let fixture: ComponentFixture<NotFoundComponent>;
  let component: NotFoundComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NotFoundComponent, MockTranslatePipe],
      imports: [RouterTestingModule]
    });

    fixture = TestBed.createComponent(NotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should provide all seven portfolio destinations', () => {
    const element: HTMLElement = fixture.nativeElement;
    const links = Array.from(element.querySelectorAll<HTMLAnchorElement>('.map-destination'));

    expect(links.length).toBe(7);
    expect(links.map(link => link.getAttribute('href'))).toEqual([
      '/',
      '/#projects',
      '/#skills',
      '/#work',
      '/#community',
      'https://www.linkedin.com/in/alexandre-gouveia-r/',
      'https://github.com/alexandregr26/'
    ]);
  });
});
