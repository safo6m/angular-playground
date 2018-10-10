import { Component, OnInit } from '@angular/core';
import { MeetingsService } from '../../services/meetings/meetings.service';
import { Meeting } from '../../model/meeting.model';

@Component({
  selector: 'app-meetings-container',
  templateUrl: './meetings-container.component.html',
  styleUrls: ['./meetings-container.component.scss']
})
export class MeetingsContainerComponent implements OnInit {
  public meetings: Array<Meeting>;

  constructor(
    private meetingService: MeetingsService
  ) { }

  ngOnInit() {
    this.meetings = this.meetingService.meetings;
  }
}
