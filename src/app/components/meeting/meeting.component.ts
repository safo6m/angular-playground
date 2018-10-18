import { Meeting } from './../../models/meeting.model';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-meeting',
  templateUrl: './meeting.component.html',
  styleUrls: ['./meeting.component.scss']
})
export class MeetingComponent implements OnInit {
  @Input() meeting: Meeting;
  @Output() deleteMeeting: EventEmitter<Meeting> = new EventEmitter();

  constructor() { }

  ngOnInit() {
    console.log(this.meeting);
  }

  onDeleteClick(): void {
    this.deleteMeeting.emit(this.meeting);
  }
}
