import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentAccountComponent } from './student-account/student-account.component';


const routes: Routes = [
  { path:'', component: StudentAccountComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
