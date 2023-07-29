import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { Student } from './Student';

@Injectable({
  providedIn: 'root'
})

export class RestApiService {
  id: number=0;
  public stud = new Subject<Student>();
  baseURL = 'http://localhost:8182/students';
  baseURL2= 'http://localhost:8182/addStudent';
  baseURL3= 'http://localhost:8182/student';
  baseURL4 = 'http://localhost:8182/update';
  baseURL5 = 'http://localhost:8182/delete';
  

  constructor(private httpClient: HttpClient) { }

  //get All Studnets
  //'http://localhost:8182/students';

 getAllStudents(): Observable<Student[]>{
    return this.httpClient.get<Student[]>(`${this.baseURL}`);
  } 
 
  //add student
  //http://localhost:8182/addStudent
 createStudent(student: Student): Observable<Object>{
  return this.httpClient.post<Object>(`${this.baseURL2}`, student);
 }



 updateStudentById(student: Student): Observable<Object>{
  return this.httpClient.put<Object>(`${this.baseURL4}/${student.id}`, student)
 }

 deleteStudentById(stud: Student): Observable<Object>{
  return this.httpClient.delete<Object>(`${this.baseURL5}/${stud.id}`);
 }
 public getServiceStudent():Observable<Student>{
  return this.stud.asObservable();
 }
 public setServiceStudent(stud:Student):void{
  return this.stud.next(stud);
 }
}
