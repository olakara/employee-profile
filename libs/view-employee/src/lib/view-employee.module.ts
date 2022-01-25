import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MainComponentComponent } from './main-component/main-component.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
       {path: '', component: MainComponentComponent, children:[ {
        path: 'general-info',        
        loadChildren: () =>
          import('@ogc/general-info').then(
            (module) => module.GeneralInfoModule
          ),
      },
      {
        path: 'job',        
        loadChildren: () =>
          import('@ogc/job').then((module) => module.JobModule),
      },
      {
        path: 'education',        
        loadChildren: () =>
          import('@ogc/education').then((module) => module.EducationModule),
      },
      {
        path: 'leaves',        
        loadChildren: () =>
          import('@ogc/leaves').then((module) => module.LeavesModule),
      },
      {
        path: 'payroll',        
        loadChildren: () =>
          import('@ogc/payroll').then((module) => module.PayrollModule),
      },
      {
        path: 'contact',        
        loadChildren: () =>
          import('@ogc/contact').then((module) => module.ContactModule),
      } ]
     }      
    ]),
  ],
  declarations: [
    MainComponentComponent
  ],
})
export class ViewEmployeeModule {}
