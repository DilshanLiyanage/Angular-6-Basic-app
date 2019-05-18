import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentComponent } from './student/student.component';
import { EmployeeComponent } from './employee/employee.component';

// this is for routing links mapping with components
const routes: Routes = [
  //this is for default root link component (when load) 
  { path: "", component: StudentComponent },
  { path: "student", component: StudentComponent },
  { path: "employee", component: EmployeeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
