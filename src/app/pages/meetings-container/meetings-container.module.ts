import { NgModule } from '@angular/core';
import { MeetingsContainerComponent } from './meetings-container.component';
import { MeetingComponent } from '../../components/meeting/meeting.component';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: MeetingsContainerComponent
  }
];


@NgModule({
  declarations: [
    MeetingsContainerComponent,
    MeetingComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [],
  providers: []
})
export class MeetingsContainerModule {}
