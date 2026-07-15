import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Aps360Component } from './aps360.component';
import { MockTranslatePipe } from '../../../testing/test-doubles';

describe('Aps360Component', () => {
  let component: Aps360Component;
  let fixture: ComponentFixture<Aps360Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Aps360Component, MockTranslatePipe],
      schemas: [NO_ERRORS_SCHEMA]
    });
    fixture = TestBed.createComponent(Aps360Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('toggles the playback control between play and pause', () => {
    const button: HTMLButtonElement = fixture.nativeElement.querySelector('.aps-playback-primary');
    const icon: HTMLElement = button.querySelector('i')!;
    const audio = component.previewAudio.nativeElement;
    const playSpy = spyOn(audio, 'play').and.returnValue(Promise.resolve());
    const pauseSpy = spyOn(audio, 'pause');

    expect(component.isPlaying).toBeFalse();
    expect(icon.classList).toContain('bx-play');

    button.click();
    fixture.detectChanges();

    expect(component.isPlaying).toBeTrue();
    expect(playSpy).toHaveBeenCalled();
    expect(button.getAttribute('aria-pressed')).toBe('true');
    expect(icon.classList).toContain('bx-pause');

    button.click();
    fixture.detectChanges();

    expect(component.isPlaying).toBeFalse();
    expect(pauseSpy).toHaveBeenCalled();
    expect(icon.classList).toContain('bx-play');
  });

  it('resets the player state when playback ends', () => {
    component.isPlaying = true;
    component.playbackProgress = 84;

    component.onPlaybackEnded();

    expect(component.isPlaying).toBeFalse();
    expect(component.playbackProgress).toBe(0);
  });
});
