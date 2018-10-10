import { Component, Input } from '@angular/core';
import { Meeting } from '../../model/meeting.model';

@Component({
  selector: 'app-meeting',
  templateUrl: './meeting.component.html',
  styleUrls: ['./meeting.component.scss']
})
export class MeetingComponent {
  @Input() meeting: Meeting;
}
