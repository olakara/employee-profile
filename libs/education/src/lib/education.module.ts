import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EducationDetailsComponent } from './education-details/education-details.component';

@NgModule({
  imports: [
    CommonModule,

    RouterModule.forChild([
       {path: '', pathMatch: 'full', component: EducationDetailsComponent} 
    ]),
  ],
  declarations: [
    EducationDetailsComponent
  ],
})
export class EducationModule {}
