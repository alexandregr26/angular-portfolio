import { Component, Input } from '@angular/core';
import { CommunityBox } from '../_models/CommunityBox';

@Component({
  selector: 'app-community-box',
  templateUrl: './community-box.component.html',
  styleUrls: ['./community-box.component.css']
})
export class CommunityBoxComponent {

  @Input() communitybox = {} as CommunityBox;

}
