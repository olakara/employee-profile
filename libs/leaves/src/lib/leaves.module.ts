import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LeavesDetailsComponent } from './leaves-details/leaves-details.component';

@NgModule({
  imports: [
    CommonModule,

    RouterModule.forChild([
      {path: '', pathMatch: 'full', component: LeavesDetailsComponent} 
    ]),
  ],
  declarations: [
    LeavesDetailsComponent
  ],
})
export class LeavesModule {}
