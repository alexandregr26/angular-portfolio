import { Component, Input } from '@angular/core';
import { ProjectBox } from '../../_models/ProjectBox';

@Component({
  selector: 'app-project-box',
  templateUrl: './project-box.component.html',
  styleUrls: ['./project-box.component.css']
})
export class ProjectBoxComponent {
  @Input() projectbox = {} as ProjectBox;
  mouseX = 0;
  mouseY = 0;
  isPointerInside = false;

  onPointerMove(event: MouseEvent): void {
    const target = event.currentTarget as HTMLElement;
    const rect = target.getBoundingClientRect();
    this.mouseX = event.clientX - rect.left;
    this.mouseY = event.clientY - rect.top;
  }

  onPointerEnter(event: MouseEvent): void {
    this.isPointerInside = true;
    this.onPointerMove(event);
  }

  onPointerLeave(): void {
    this.isPointerInside = false;
  }
}
