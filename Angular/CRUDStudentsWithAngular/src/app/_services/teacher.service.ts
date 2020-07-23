import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  constructor(private http : HttpClient) { }

  Getteachers()
  {
    return this.http.get(environment.apiBaseURL + 'Teacher');
  }

}
