import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormArray, FormGroup, Validators } from '@angular/forms';
import { TeacherService } from '../_services/teacher.service';
import { StudentAccountService } from '../_services/student-account.service';

@Component({
  selector: 'app-student-account',
  templateUrl: './student-account.component.html',
  styleUrls: ['./student-account.component.css']
})
export class StudentAccountComponent implements OnInit {

  studentForm : FormArray = this.fb.array([])
  allTeachers : []
  notification = null

  constructor(private fb : FormBuilder, 
              private techSRV : TeacherService,
              private stdSRV : StudentAccountService) { }

  ngOnInit(): void {
    this.techSRV.Getteachers().subscribe(res => this.allTeachers = res as []);
    this.stdSRV.GetstudentAccounts().subscribe(res => {
      if(res == [])
         this.addStudentForm();
      else {
    (res as []).forEach((studentAccount : any) => {
      this.studentForm.push(this.fb.group({
        studentAccountID : [studentAccount.studentAccountID],
        studentNo : [studentAccount.studentNo, Validators.required],
        studentName : [studentAccount.studentName, Validators.required],
        teacherID : [studentAccount.teacherID, Validators.min(1)],
        age : [studentAccount.age, Validators.required]
      }))
    })
      }   
    })
  }

  addStudentForm()
  {
    this.studentForm.push(this.fb.group({
      studentAccountID : [0],
      studentNo : ['', Validators.required],
      studentName : ['', Validators.required],
      teacherID : [0, Validators.min(1)],
      age : [0, Validators.required]
    }))
  }

  onSubmit(fg:FormGroup)
  {
    if(fg.value.studentAccountID == 0)
    this.stdSRV.PostStudentAccount(fg.value).subscribe((res: any) => {
      fg.patchValue({studentAccountID : res.studentAccountID})
      this.showNotification('insert')
    })
    else
    this.stdSRV.PutStudentAccount(fg.value).subscribe((res :any) => {
      this.showNotification('update')
    })
  }

  onDelete(studentAccountID, i)
  {
    if(studentAccountID == 0)
      this.studentForm.removeAt(i); 
    else if(confirm('Are you sure to delete this student ?'))
    {
      this.stdSRV.DeleteStudentAccount(studentAccountID).subscribe(res => {
        this.studentForm.removeAt(i);
        this.showNotification('delete')
      })
    }  
  }

  showNotification(category)
  {
    switch (category) {
      case 'insert':
        this.notification = {class : 'text-success', message : 'Saved'}
        break;
      case 'update':
          this.notification = {class : 'text-primary', message : 'Updated'}
          break;
       case 'delete':
            this.notification = {class : 'text-danger', message : 'Deleted'}
            break;
    }
    setTimeout(() => {
      this.notification = null
    }, 3000);
  }
}
