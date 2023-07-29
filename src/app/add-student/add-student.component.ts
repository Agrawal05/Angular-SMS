import { Component, OnInit, Inject, Input, Output, EventEmitter } from '@angular/core';
import { Student } from '../Student';
import { RestApiService } from '../rest-api.service';
//import { Http } from '@angular/http';
import { Router } from '@angular/router';
//import { EventEmitter } from 'stream';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  student: Student = new Student();

  constructor(
   private restApi: RestApiService,
   private route: Router
  ) { }

  ngOnInit(): void {
     }
     
  createStudent(){
    this.restApi.createStudent(this.student).subscribe();
    this.route.navigate(['GetStudents']);
  }

}
