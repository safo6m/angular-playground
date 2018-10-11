import { Meeting } from './../../models/meeting.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-meeting',
  templateUrl: './meeting.component.html',
  styleUrls: ['./meeting.component.scss']
})
export class MeetingComponent implements OnInit {
  @Input() meeting: Meeting;

  constructor() { }

  ngOnInit() {
    console.log(this.meeting);
  }

}
