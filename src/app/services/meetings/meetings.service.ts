import { Injectable } from '@angular/core';
import { Meeting } from './../../models/meeting.model';
import { mockMeetings } from './../../mock/meetings';

@Injectable()
export class MeetingsService {
  public get meetings(): Array<Meeting> {
    return mockMeetings.map((meetingData) => new Meeting(meetingData));
  }
}
