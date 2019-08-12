import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeListComponent } from './employee-list.component';
import { RouterModule } from '@angular/router';
import { EMPLOYEE_ROUTES } from './employee.routes';



@NgModule({
  declarations: [
    EmployeeListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(EMPLOYEE_ROUTES)
  ]
})
export class EmployeeListModule { }
