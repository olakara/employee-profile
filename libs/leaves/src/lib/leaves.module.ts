import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LeavesDetailsComponent } from './leaves-details/leaves-details.component';
import { CountryComponent } from './panels/country/country.component';
import { BloodTypeComponent } from './panels/blood-type/blood-type.component';
import { CountryListComponent } from './components/country-list/country-list.component';
import { BloodTypeListComponent } from './components/blood-type-list/blood-type-list.component';
import { CountryFormComponent } from './components/country-form/country-form.component';
import { BloodTypeFormComponent } from './components/blood-type-form/blood-type-form.component';

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    RouterModule.forChild([
      {path: '', pathMatch: 'full', component: LeavesDetailsComponent} 
    ]),
  ],
  declarations: [
    LeavesDetailsComponent,
    CountryComponent,
    BloodTypeComponent,
    CountryListComponent,
    BloodTypeListComponent,
    CountryFormComponent,
    BloodTypeFormComponent
  ],
})
export class LeavesModule {}
