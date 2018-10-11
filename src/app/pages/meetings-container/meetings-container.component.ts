import { Meeting } from './../../models/meeting.model';
import { Component, OnInit } from '@angular/core';
import { MeetingsService } from './../../services/meetings/meetings.service';

@Component({
  selector: 'app-meetings-container',
  templateUrl: './meetings-container.component.html',
  styleUrls: ['./meetings-container.component.scss']
})
export class MeetingsContainerComponent implements OnInit {
  public meetings: Array<Meeting>;

  constructor(
    private meetingsService: MeetingsService
  ) { }

  ngOnInit() {
    this.meetings = this.meetingsService.meetings;
  }

}
