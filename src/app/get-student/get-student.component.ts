import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Refresh } from '@ngrx/store-devtools/src/actions';
import { RestApiService } from '../rest-api.service';
import { Student } from '../Student';

@Component({
  selector: 'app-get-student',
  templateUrl: './get-student.component.html',
  styleUrls: ['./get-student.component.css']
})
export class GetStudentComponent implements OnInit {

  student: Student[] = [];
  title = 'pagination';
  POSTS: any;
  page: number=1;
  count = 0;
  tableSize: number = 10;
  tableSizes: any = [5,10,15,20];
  
  constructor(public restApi: RestApiService,
    private route:Router) { }

  ngOnInit(): void {
    this.getAllStudent();
  }

  getAllStudent(){
    this.restApi.getAllStudents().subscribe(data => {
      this.student = data;
    });
  }

  updateStudentRecord(stud:Student){
    this.restApi.setServiceStudent(stud);
    this.route.navigate(['UpdateStudent']);
  }

  deleteStudentById(stud:Student){
    if(stud!=null){
    window.confirm("are you sure u want to delete");
    this.restApi.deleteStudentById(stud).subscribe();
    window.location.reload();
    }
  }

  OnTableDataChange(event: any){
    this.page = event;
    this.getAllStudent();
  }

  OnTableSizeChange(event: any){
    this.tableSize = event.target.value;
    this.page =1;
    this.getAllStudent();
  }
  
}
