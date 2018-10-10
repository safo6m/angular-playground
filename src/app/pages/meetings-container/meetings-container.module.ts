import { NgModule } from '@angular/core';
import { MeetingsContainerComponent } from './meetings-container.component';
import { MeetingComponent } from '../../components/meeting/meeting.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    MeetingsContainerComponent,
    MeetingComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [],
  providers: []
})
export class MeetingsContainerModule {}
