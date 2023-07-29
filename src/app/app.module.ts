import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { HomeComponent } from './home/home.component';
import { EditStudentComponent } from './edit-student/edit-student.component';
import { GetStudentComponent } from './get-student/get-student.component';
// import { Http } from '@angular/http';
import { Store, StoreModule } from '@ngrx/store';
import { StoreDevtools } from '@ngrx/store-devtools';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { ButtonComponent } from './button/button.component';
import { AccordionComponent } from './accordion/accordion.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { CalendarComponent } from './calendar/calendar.component';
import { ListEventsComponent } from './list-events/list-events.component';
import { WebcamComponent } from './webcam/webcam.component';
import { AngularWebcamComponent } from './angular-webcam/angular-webcam.component';
import { DetailWebcamComponent } from './detail-webcam/detail-webcam.component';
import { DevtoolDetectComponent } from './devtool-detect/devtool-detect.component';
import { CommentComponent } from './comment/comment.component';
import { NestedCommentComponent } from './nested-comment/nested-comment.component';
import { KeyboardComponent } from './stop-keyevent/keyboard/keyboard.component';
import { HelloComponent } from './stop-keyevent/hello/hello.component';
import { OverlayComponent } from './stop-keyevent/overlay/overlay.component';

@NgModule({
  declarations: [
    AppComponent,
    AddStudentComponent,
    HomeComponent,
    EditStudentComponent,
    GetStudentComponent,
    HeaderComponent,
    ButtonComponent,
    AccordionComponent,
    CalendarComponent,
    ListEventsComponent,
    WebcamComponent,
    AngularWebcamComponent,
    DetailWebcamComponent,
    DevtoolDetectComponent,
    CommentComponent,
    NestedCommentComponent,
    KeyboardComponent,
    HelloComponent,
    OverlayComponent,
  ],
  providers:[],
  imports: [
    BrowserModule,
    AppRoutingModule,
     FormsModule,
    HttpClientModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    StoreModule.forRoot({})
  ], 
  bootstrap: [AppComponent]
})
export class AppModule { }
