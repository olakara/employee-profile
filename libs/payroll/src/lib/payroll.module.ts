import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PayrollDetailsComponent } from './payroll-details/payroll-details.component';
import { MainComponentComponent } from './main-component/main-component.component';

@NgModule({
  imports: [
    CommonModule,

    RouterModule.forChild([
      {path: '', pathMatch: 'full', component: PayrollDetailsComponent} 
    ]),
  ],
  declarations: [
    PayrollDetailsComponent,
    MainComponentComponent
  ],
})
export class PayrollModule {}
