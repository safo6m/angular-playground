import { MeetingsContainerModule } from './pages/meetings-container/meetings-container.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { MeetingsService } from './services/meetings/meetings.service';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'meetings', loadChildren: './pages/meetings-container/meetings-container.module#MeetingsContainerModule' }
    ]
  }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    MeetingsService
  ],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
