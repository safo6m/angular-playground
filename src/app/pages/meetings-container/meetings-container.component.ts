import { Component, OnInit } from '@angular/core';
import { MeetingsService } from '../../services/meetings/meetings.service';

@Component({
  selector: 'app-meetings-container',
  templateUrl: './meetings-container.component.html',
  styleUrls: ['./meetings-container.component.scss']
})
export class MeetingsContainerComponent implements OnInit {

  constructor(
    private meetingService: MeetingsService
  ) { }

  ngOnInit() {
    console.log(this.meetingService.meetings);
  }
}
