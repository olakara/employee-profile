import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { JobDetailsComponent } from './job-details/job-details.component';

@NgModule({
  imports: [
    CommonModule,

    RouterModule.forChild([
       {path: '', pathMatch: 'full', component: JobDetailsComponent} 
    ]),
  ],
  declarations: [
    JobDetailsComponent
  ],
})
export class JobModule {}
