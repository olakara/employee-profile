import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { GeneralInfoDetailsComponent } from './general-info-details/general-info-details.component';

@NgModule({
  imports: [
    CommonModule,

    RouterModule.forChild([
       {path: '', pathMatch: 'full', component: GeneralInfoDetailsComponent} 
    ]),
  ],
  declarations: [
    GeneralInfoDetailsComponent
  ],
})
export class GeneralInfoModule {}
