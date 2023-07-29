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
  { path: 'keyboard', component: KeyboardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
