import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EmployeesHomeComponent } from './employees-home/employees-home.component';

@NgModule({
  imports: [
    CommonModule,

    RouterModule.forChild([
       {path: '', pathMatch: 'full', component: EmployeesHomeComponent}
    ]),
  ],
  declarations: [
    EmployeesHomeComponent
  ],
})
export class EmployeesModule {}
