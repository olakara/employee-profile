import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ContactDetailsComponent } from './contact-details/contact-details.component';

@NgModule({
  imports: [
    CommonModule,

    RouterModule.forChild([
       {path: '', pathMatch: 'full', component: ContactDetailsComponent} 
    ]),
  ],
  declarations: [
    ContactDetailsComponent
  ],
})
export class ContactModule {}
