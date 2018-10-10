import { Meeting } from './../../model/meeting.model';
import { Injectable } from '@angular/core';
import { mockMeetings } from '../../mock/meetings';

@Injectable({
  providedIn: 'root'
})
export class MeetingsService {
  public get meetings(): Array<Meeting> {
    return mockMeetings.map((meetingData: object) => new Meeting(meetingData));
  }
}
