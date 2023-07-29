import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestApiService } from '../rest-api.service';
import { Student } from '../Student';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})

export class EditStudentComponent implements OnInit {
  student: Student =new Student();

  constructor(private route: Router,
    private restApi: RestApiService) {      
    }

  ngOnInit(): void {
        }

  updateStudent(id:number){
    this.restApi.updateStudentById(this.student).subscribe();
    this.route.navigate(['GetStudents']);
  }
}
