import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddStudentComponent } from './add-student/add-student.component';
import { EditStudentComponent } from './edit-student/edit-student.component';
import { GetStudentComponent } from './get-student/get-student.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ListEventsComponent } from './list-events/list-events.component';
import { WebcamComponent } from './webcam/webcam.component';
import { DevtoolDetectComponent } from './devtool-detect/devtool-detect.component';
import { CommentComponent } from './comment/comment.component';
import { KeyboardComponent } from './stop-keyevent/keyboard/keyboard.component';
import { OneWayBindingComponent } from './basics/one-way-binding/one-way-binding.component';
import { TwoWayBindingComponent } from './basics/two-way-binding/two-way-binding.component';
import { RouteDirectiveComponent } from './basics/directives/route-directive/route-directive.component';
import { NgForComponent } from './basics/directives/ng-for/ng-for.component';
import { NgStyleComponent } from './basics/directives/ng-style/ng-style.component';
import { NgIfComponent } from './basics/directives/ng-if/ng-if.component';
import { NgClassComponent } from './basics/directives/ng-class/ng-class.component';
import { EditorComponent } from './editor/editor.component';
import { SwitchScreenComponent } from './switch-screen/switch-screen.component';
import { ScreenShotComponent } from './screen-shot/screen-shot.component';

export const routes: Routes = [
  { path: '', redirectTo: 'Header', pathMatch: "full" },
  { path: 'Home', component: HomeComponent },
  { path: 'AddStudent', component: AddStudentComponent },
  { path: 'GetStudents', component: GetStudentComponent },
  { path: 'UpdateStudent', component: EditStudentComponent },
  { path: 'Header', component: HeaderComponent },
  { path: 'ListEvents', component: ListEventsComponent },
  { path: 'webcam', component: WebcamComponent },
  { path: 'devtool', component: DevtoolDetectComponent },
  { path: 'comment', component: CommentComponent },
  { path: 'keyboard', component: KeyboardComponent },
  { path: 'two-way-binding', component: TwoWayBindingComponent },
  { path: 'one-way-binding', component: OneWayBindingComponent },
  { path: 'route-directive', component: RouteDirectiveComponent },
  { path: 'ng-for', component: NgForComponent },
  { path: 'ng-style', component: NgStyleComponent },
  { path: 'ng-if', component: NgIfComponent },
  { path: 'ng-class', component: NgClassComponent },
  { path: 'editor', component: EditorComponent },
  { path: 'switch-screen', component: SwitchScreenComponent },
  { path: 'screen-shot', component: ScreenShotComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
