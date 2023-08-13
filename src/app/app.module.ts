import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { HomeComponent } from './home/home.component';
import { EditStudentComponent } from './edit-student/edit-student.component';
import { GetStudentComponent } from './get-student/get-student.component';
import { Store, StoreModule } from '@ngrx/store';
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
import { DisableKeyboardDirective } from './stop-keyevent/disable-keyboard.directive';
import { TwoWayBindingComponent } from './basics/two-way-binding/two-way-binding.component';
import { OneWayBindingComponent } from './basics/one-way-binding/one-way-binding.component';
import { NgForComponent } from './basics/directives/ng-for/ng-for.component';
import { RouteDirectiveComponent } from './basics/directives/route-directive/route-directive.component';
import { NgStyleComponent } from './basics/directives/ng-style/ng-style.component';
import { NgIfComponent } from './basics/directives/ng-if/ng-if.component';
import { NgClassComponent } from './basics/directives/ng-class/ng-class.component';
import { SearchBoxComponent } from './basics/search-box/search-box.component';
import { EditorComponent } from './editor/editor.component';
import { SwitchScreenComponent } from './switch-screen/switch-screen.component';

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
    DisableKeyboardDirective,
    TwoWayBindingComponent,
    OneWayBindingComponent,
    NgForComponent,
    RouteDirectiveComponent,
    NgStyleComponent,
    NgIfComponent,
    NgClassComponent,
    SearchBoxComponent,
    EditorComponent,
    SwitchScreenComponent
  ],
  providers: [],
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
