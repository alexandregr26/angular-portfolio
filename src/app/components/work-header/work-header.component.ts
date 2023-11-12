import { Component, Input } from '@angular/core';
import { WorkHeader } from '../../_models/WorkHeader';

@Component({
  selector: 'app-work-header',
  templateUrl: './work-header.component.html',
  styleUrls: ['./work-header.component.css']
})
export class WorkHeaderComponent {
  @Input() header = {} as WorkHeader;
}
