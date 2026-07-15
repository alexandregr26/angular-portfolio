import { Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { getOtherWorks, projects } from 'src/app/data/projects';

@Component({
  selector: 'app-aps360',
  templateUrl: './aps360.component.html'
})
export class Aps360Component implements OnDestroy {
  @ViewChild('previewAudio', { static: true }) previewAudio!: ElementRef<HTMLAudioElement>;

  isPlaying = false;
  playbackProgress = 0;
  highlights = [1, 2, 3, 4, 5, 6];
  pipelineSteps = [1, 2, 3, 4];

  datasetRows = [
    { labelKey: 'initialDataset', value: '174,000' },
    { labelKey: 'afterFiltering', value: '42,000' },
    { labelKey: 'afterDuplicates', value: '38,000' },
    { labelKey: 'finalFeatures', value: '10' },
    { labelKey: 'popularityRange', value: '0–100' }
  ];

  resultMetrics = [
    { value: '55%', titleKey: 'metric1Title', bodyKey: 'metric1Body' },
    { value: '57%', titleKey: 'metric2Title', bodyKey: 'metric2Body' },
    { value: '45%', titleKey: 'metric3Title', bodyKey: 'metric3Body' },
    { value: '0.007', titleKey: 'metric4Title', bodyKey: 'metric4Body' }
  ];

  classPerformance = [
    { classNumber: 0, value: 69.5 },
    { classNumber: 1, value: 16.6 },
    { classNumber: 2, value: 53.4 },
    { classNumber: 3, value: 58.8 },
    { classNumber: 4, value: 6.8 }
  ];

  popularityClasses = [
    { range: '0–19', classNumber: 0 },
    { range: '20–39', classNumber: 1 },
    { range: '40–59', classNumber: 2 },
    { range: '60–79', classNumber: 3 },
    { range: '80–100', classNumber: 4 }
  ];

  technicalStack = [
    { name: 'Python', img: 'assets/img/skills/hard/python.png' },
    { name: 'PyTorch', img: 'assets/img/skills/hard/pytorch.png' },
    { name: 'NumPy', img: 'assets/img/skills/hard/numpy.png' },
    { name: 'Spotify API', icon: 'bx bxl-spotify' },
    { name: 'Git', img: 'assets/img/skills/hard/git.png' }
  ];

  projects = projects;
  otherWorks = getOtherWorks('aps360');

  togglePlayback(): void {
    const audio = this.previewAudio.nativeElement;

    if (this.isPlaying) {
      audio.pause();
      this.isPlaying = false;
      return;
    }

    this.isPlaying = true;
    void audio.play().catch(() => {
      this.isPlaying = false;
    });
  }

  syncPlaybackProgress(): void {
    const audio = this.previewAudio.nativeElement;
    this.playbackProgress = Number.isFinite(audio.duration) && audio.duration > 0
      ? (audio.currentTime / audio.duration) * 100
      : 0;
  }

  onPlaybackEnded(): void {
    this.isPlaying = false;
    this.playbackProgress = 0;
  }

  ngOnDestroy(): void {
    this.previewAudio?.nativeElement.pause();
  }
}
