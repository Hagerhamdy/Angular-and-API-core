import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StudentAccountService {

  constructor(private http : HttpClient ) { }

  GetstudentAccounts()
  {
    return this.http.get(environment.apiBaseURL + 'StudentAccount' );
  }    
  
  PutStudentAccount(student)
  {
    const formData = new FormData();
    formData.append('studentAccountID', student.studentAccountID)
    formData.append('studentNo', student.studentNo)
    formData.append('studentName', student.studentName)
    formData.append('teacherID', student.teacherID)
    formData.append('age', student.age)
    return this.http.put(environment.apiBaseURL + 'StudentAccount/' + student.studentAccountID, formData); 
  }

  PostStudentAccount(student)
  {
    const formData = new FormData();
    formData.append('studentAccountID', student.studentAccountID)
    formData.append('studentNo', student.studentNo)
    formData.append('studentName', student.studentName)
    formData.append('teacherID', student.teacherID)
    formData.append('age', student.age)
    return this.http.post(environment.apiBaseURL + 'StudentAccount' , formData);
  }

  DeleteStudentAccount(id)
  {
    return this.http.delete(environment.apiBaseURL + 'StudentAccount/' + id);
  }
}
