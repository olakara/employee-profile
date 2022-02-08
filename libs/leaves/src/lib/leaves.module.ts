import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LeavesDetailsComponent } from './leaves-details/leaves-details.component';

@NgModule({
  imports: [
    CommonModule,
    NgbModule,    
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {path: '', pathMatch: 'full', component: LeavesDetailsComponent} 
    ]),
  ],
  declarations: [
    LeavesDetailsComponent   
  ],
})
export class LeavesModule {}
