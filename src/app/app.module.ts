import { MeetingsContainerModule } from './pages/meetings-container/meetings-container.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { MeetingsContainerComponent } from './pages/meetings-container/meetings-container.component';
import { MeetingComponent } from './components/meeting/meeting.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'meetings', component: MeetingsContainerComponent }
    ]
  }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MeetingsContainerModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
